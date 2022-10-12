using Nuke.Common;
using Nuke.Common.CI;
using Nuke.Common.IO;
using Nuke.Common.ProjectModel;
using Nuke.Common.Tools.DotNet;
using Nuke.Common.Utilities.Collections;
using static Serilog.Log;
using static Nuke.Common.IO.FileSystemTasks;
using static Nuke.Common.Tools.DotNet.DotNetTasks;

namespace NukeBuild;

[ShutdownDotNetAfterServerBuild]
class Build : Nuke.Common.NukeBuild {

    public static int Main () => Execute<Build>(x => x.Compile);

    [Parameter("Configuration to build - Default is 'Debug' (local) or 'Release' (server)")]
    readonly Configuration Configuration = IsLocalBuild ? Configuration.Debug : Configuration.Release;

    [Solution] readonly Solution Solution;

    static AbsolutePath SourceDirectory => RootDirectory / "src";
    static AbsolutePath OutputDirectory => RootDirectory / "output";
    static AbsolutePath DockerfileDirectory => RootDirectory / "Docker";

    Target StartupInformation => _ => _
        .Before(Clean)
        .Executes(() =>
        {
            Information($"Configuration: {Configuration}");
            Information($"Output directory: {OutputDirectory}");
        });

    Target Clean => _ => _
        .DependsOn(StartupInformation)
        .Executes(() =>
        {
            if (IsLocalBuild) {
                Information("Detected that build is running locally. Cleaning...");
                SourceDirectory.GlobDirectories("**/bin", "**/obj").ForEach(DeleteDirectory);
                EnsureCleanDirectory(OutputDirectory);
            }
            else {
                Information("Clean step is skipped on CI");
            }
        });

    Target Restore => _ => _
        .DependsOn(Clean)
        .Executes(() =>
        {
            DotNetRestore(s => s
                .SetProjectFile(Solution)
                .EnableUseLockFile()
            );
        });

    Target Compile => _ => _
        .DependsOn(Restore)
        .Executes(() =>
        {
            DotNetBuild(s => s
                .SetProjectFile(Solution)
                .SetConfiguration(Configuration)
                .EnableNoRestore()
                .EnableNoLogo()
            );
        });
    
    Target Publish => _ => _
        .DependsOn(Compile)
        .Executes(() =>
        {
            CopyFileToDirectory(DockerfileDirectory / "Dockerfile", OutputDirectory);
            CopyFileToDirectory(DockerfileDirectory / "nginx.conf", OutputDirectory);
            DotNetPublish(s => s
                .SetProject(SourceDirectory / "MitchfenSite.csproj")
                .SetConfiguration(Configuration)
                .EnableNoBuild()
                .EnableNoLogo()
                .SetOutput(OutputDirectory)
            );
        });

}
