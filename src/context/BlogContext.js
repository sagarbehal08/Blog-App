import React , {useReducer} from 'react';
import createDataContext from './createDataContext';

const BlogContext=React.createContext();
const blogReducer=(state,action)=>{
    switch(action.type){
        case 'delete_blogPost':
            return state.filter((blogPost)=>blogPost.id!==action.payload);
        case 'add_blogPost': 
                return [...state,
                    {
                        id:Math.floor(Math.random()*99999),
                        title:action.payload.title,
                        content:action.payload.content
                    }
                ];
        default:
            return state;
    }
}

const addBlogPost=(dispatch)=>{
        // setBlogPost([...blogPost,  {title: `Title Blog #${blogPost.length+1}`}])
        return (title,content,callback)=>{
            dispatch({type:'add_blogPost',payload:{title,content}})
            callback();
            };
        }

const deleteBlogPost=(dispatch)=>{
            // setBlogPost([...blogPost,  {title: `Title Blog #${blogPost.length+1}`}])
            return (id)=>{
                dispatch({type:'delete_blogPost', payload:id})
                };
            }

const editBlogPost=(dispatch)=>{
    return (id,title,content)=>{
        dispatch({type:'edit_blogPost',payload:{id,title,content}});
    }
}
export const {Context,Provider}=createDataContext(blogReducer,{addBlogPost,deleteBlogPost},[]);