let goals: { name: string; id: string }[] = [];

class CourseGoal {
  static create(text: string) {
    const newGoal = { id: new Date().toISOString(), name: text };
  }

  static findAll() {
    return goals.slice();
  }

  static findById(id: string) {
    return goals.find((goal) => goal.id === id);
  }

  static update(id: string, newText: string) {
    const goal = this.findById(id);
    if (!goal) {
      throw new Error("goal not found!");
    }
    goal.name = newText;
  }

  static delete(id: string) {
    goals = goals.filter((goal) => goal.id !== id);
  }
}
