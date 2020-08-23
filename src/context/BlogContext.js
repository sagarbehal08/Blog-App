import React  from 'react';
import createDataContext from './createDataContext';

const BlogContext=React.createContext();
const blogReducer=(state,action)=>{
    switch(action.type){
        case 'add_blogPost': 
                return [...state,
                    {
                        title:`Title Blog #${state.length+1}`
                    }
                ];
        default:
            return state;
    }
}

const addBlogPost=(dispatch)=>{
        // setBlogPost([...blogPost,  {title: `Title Blog #${blogPost.length+1}`}])
        return ()=>{
            dispatch({type:'add_blogPost'})
            };
        }

const deleteBlogPost=(dispatch)=>{
            // setBlogPost([...blogPost,  {title: `Title Blog #${blogPost.length+1}`}])
            return ()=>{
                dispatch({type:'add_blogPost'})
                };
            }
export const {Context,Provider}=createDataContext(blogReducer,{addBlogPost},[]);