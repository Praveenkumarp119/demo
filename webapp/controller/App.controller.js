sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("Application.Report.controller.App", {
		onInit: function () {
			var arr = [{
				id: "121",
				name: "sathish"
			}];
			var model = new sap.ui.model.json.JSONModel({
				results: arr
			});
			this.getOwnerComponent().setModel(model, "model1");
			this.getOwnerComponent().getModel("model1").refresh();

		},

		onchangeFrmDate: function (oEvent) {
			debugger;
		},
		Valuehelpddo: function () {
			var arr1 = [{
				id: "123",
				name: "sanjay"
			}];
			var searchmodel = new sap.ui.model.json.JSONModel({
				results: arr1            
			});
			this.getOwnerComponent().setModel(searchmodel, "ddoModel");
			this.getOwnerComponent().getModel("ddoModel").refresh();

			if (!this.ddofrag) {
				this.ddofrag = sap.ui.xmlfragment("Application.Report.fragments.DDO", this);
				this.getView().addDependent(this.ddofrag);
			}
			if(this.ddofrag){
				this.ddofrag.open();
			}
			
		},
		ddoConfirm: function(oEvt){
			debugger;
			var id = oEvt.getParameters().selectedItem.getTitle();
			var desc = oEvt.getParameters().selectedItem.getDescription();
			var fnlval = id + " (" + desc + ")";
			
			this.byId("ddo").setValue(fnlval);
			this.ddofrag.close();
		}
	});
});