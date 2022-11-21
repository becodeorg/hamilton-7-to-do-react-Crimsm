import { render } from "@testing-library/react";
import { text } from "body-parser";
import React, {Compoment} from "react";

class TodoList extends Compoment 
{
    constructor()
    {
        super();
        this.state =
        {
            userInput: '',
            items:[]
        };
    }

    render()
    {
    return
        <div>
            <h1>Todo List</h1>
            <form>
                <input value={this.state.userInput} type= "text" placeholder="Items"></input>
                <button>Add Todo</button>
            </form>
        </div>
    }
}

export default TodoList;