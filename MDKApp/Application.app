{
	"_Name": "MDKApp",
	"Version": "/MDKApp/Globals/Application/AppDefinition_Version.global",
	"MainPage": "/MDKApp/Pages/Incident/Incident_List.page",
	"OnLaunch": [
		"/MDKApp/Actions/Service/InitializeOffline.action"
	],
	"OnWillUpdate": "/MDKApp/Rules/Application/OnWillUpdate.js",
	"OnDidUpdate": "/MDKApp/Actions/Service/InitializeOffline.action",
	"Styles": "/MDKApp/Styles/Styles.less",
	"Localization": "/MDKApp/i18n/i18n.properties",
	"_SchemaVersion": "24.11"
}