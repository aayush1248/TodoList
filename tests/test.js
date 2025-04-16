QUnit.test("addTask adds a task to the list", function (assert) {
    tasks = [];
    addTask("Test Task", "Test Description");
    assert.equal(tasks.length, 1, "Task list should have one task");
    assert.equal(tasks[0].title, "Test Task", "Task title should match");
    assert.equal(tasks[0].description, "Test Description", "Task description should match");
});

QUnit.test("deleteTask removes a task", function (assert) {
    tasks = [{ id: 1, title: "Test Task", description: "Test Description" }];
    deleteTask(1);
    assert.equal(tasks.length, 0, "Task list should be empty");
});