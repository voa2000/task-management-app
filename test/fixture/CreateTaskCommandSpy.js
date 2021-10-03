import type { CreateTaskCommand } from "../../src/commands/CreateTaskCommand";

export class CreateTaskCommandSpy implements CreateTaskCommand {
  numberOfCalls = 0;

  execute(title: string, description: string) {
    this.numberOfCalls++;
  }

  wasCalled(): number {
    return this.numberOfCalls;
  }
}