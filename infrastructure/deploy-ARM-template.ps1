$templateFile = $( Join-path $pwd.path template.json)
$resourceGroupName = "mitchfen_personal_site_container"

#Connect-AzAccount

New-AzResourceGroupDeployment `
  -Name DeployTemplate `
  -ResourceGroupName $resourceGroupName `
  -TemplateFile $templateFile `
  -sites_mitchfen_xyz_container_name "mitchfen-xyz-container" `
  -serverfarms_mitchfenpersonalsite_appservice_plan_name "mitchfenpersonalsite-appservice-plan" `
  -customDomainVerificationId $CUSTOM_DOMAIN_VERIFICATION_ID `
  -verbose
