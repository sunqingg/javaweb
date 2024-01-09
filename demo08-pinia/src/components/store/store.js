import {defineStore } from 'pinia'

export const DefinePerson =  defineStore(
    {
        id: 'personPinia', //必须唯一
        state: () => { // state中用于定义数据
            return {
                username: '张三',
                age: 0,
                hobbies: ['唱歌', '跳舞']
            }

        },
        getters: {
            getHobbiesLenth(){
                return this.hobbies.length
        },
            getAge(){
                return this.age
        }
        },
        actions: {
            doubleAge() {
                this.age = this.age *2;
            }
        }

    }
)

