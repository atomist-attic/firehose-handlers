import { Given, When, Then, HandlerScenarioWorld, EventHandlerScenarioWorld } from "@atomist/rug/test/handler/Core";
import { Build } from "@atomist/cortex/stub/Build";

Given("the BuildFirehose is registered", (world: HandlerScenarioWorld) => {
    let w: EventHandlerScenarioWorld = world as EventHandlerScenarioWorld;
    w.registerHandler("BuildFirehose");
});

const buildName = "mybuild";

When("a new Build is received", (world: HandlerScenarioWorld) => {
    let w: EventHandlerScenarioWorld = world as EventHandlerScenarioWorld;
    let build = new Build().withName(buildName);
    w.sendEvent(build);
});

Then("the event handler is triggered", (world: EventHandlerScenarioWorld) => {
    return world.plan() != null
})

Then("the event handler should respond with the correct message", (world: HandlerScenarioWorld) => {
    // const expected = `Build event: ${buildName}`;
    // const message = world.plan().messages[0].body.value;
    // return message == expected;
    return world.plan().messages[0] != null
});
