Feature: BuildFirehose handler handles /Build events
  The BuildFirehose event handler should
  respond with the appropriate message.

  Scenario: Produces a raw firehose of /Build events
    Given the BuildFirehose is registered
    When a new Build is received
    Then the event handler is triggered
    Then the event handler should respond with the correct message
