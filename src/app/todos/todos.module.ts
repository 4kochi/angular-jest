import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TodoFooterComponent } from './todo-footer/todo-footer.component';
import { TodoHeaderComponent } from './todo-header/todo-header.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodosRoutingModule } from './todos-routing.module';
import { TrimPipe } from './trim.pipe';

@NgModule({
  declarations: [TodoHeaderComponent, TodoFooterComponent, TodoItemComponent, TodoListComponent, TrimPipe],
  imports: [CommonModule, FormsModule, TodosRoutingModule]
})
export class TodosModule {}
