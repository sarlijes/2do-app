from todo.mongo_database import get_todo_collection

def test_todo_collection_exists(mongo):
    todo_collection = get_todo_collection()
    assert todo_collection is not None