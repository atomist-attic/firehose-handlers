import { HandleEvent, Message, Plan } from '@atomist/rug/operations/Handlers'
import { GraphNode, Match } from '@atomist/rug/tree/PathExpression'
import { EventHandler, Tags } from '@atomist/rug/operations/Decorators'
import { Build } from "@atomist/cortex/stub/Build"

/**
 * Listens and reacts to all events associated with Builds.
 */
@EventHandler("BuildFirehose", "Listens and reacts to all events associated with Builds", "/Build()")
@Tags("documentation")
export class BuildFirehose implements HandleEvent<Build, GraphNode> {
    handle(event: Match<Build, GraphNode>): Plan {
        let root: Build = event.root()
        let plan: Plan = new Plan()
        let message = new Message(`${root.nodeName()} event: ${root.name()}`)
        message.withNode(root)
        return plan.add(message)
    }
}

export const buildFirehose = new BuildFirehose
