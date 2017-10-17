({
        doInit : function(component, event) {
            var action = component.get("c.findAll");
            action.setCallback(this, function(resp) {
                console.log('accounts');
                console.log(resp.getReturnValue());

                //Update the componet account list
                component.set("v.accounts", resp.getReturnValue());

                //Publish account list to event
                var event = $A.get("e.c:AccountsLoaded");
                event.setParams({"accounts": resp.getReturnValue()});
                event.fire();
            });
            $A.enqueueAction(action);
        }
    })
    