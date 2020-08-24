import createDataContext from './createDataContext';
import jsonServer from '../api/jsonServer';

const blogReducer=(state,action)=>{
    switch(action.type){
        case 'get_blogPost':
            return action.payload;
        case 'edit_blogPost':
            return state.map((blogPost)=>{
                return blogPost.id===action.payload.id
                ?action.payload:
                blogPost
            })
        case 'delete_blogPost':
            return state.filter((blogPost)=>blogPost.id!==action.payload);
        // case 'add_blogPost': 
        //         return [...state,
        //             {
        //                 id:Math.floor(Math.random()*99999),
        //                 title:action.payload.title,
        //                 content:action.payload.content
        //             }
        //         ];
        default:
            return state;
    }
}
const getBlogPost=(dispatch)=>{
    return async () =>{
        const response = await jsonServer.get("/blogposts");

        dispatch({type:'get_blogPost',payload:response.data});
    }
}
const addBlogPost=(dispatch)=>{
        // setBlogPost([...blogPost,  {title: `Title Blog #${blogPost.length+1}`}])
        return async (title,content,callback)=>{
            await jsonServer.post("/blogposts",{title,content});
            // dispatch({type:'add_blogPost',payload:{title,content}})
            if(callback)
            {callback();}
            };
        }

const deleteBlogPost=(dispatch)=>{
            // setBlogPost([...blogPost,  {title: `Title Blog #${blogPost.length+1}`}])
            return (id)=>{
                dispatch({type:'delete_blogPost', payload:id})
                };
            }


const editBlogPost=(dispatch)=>{
    return (id,title,content,callback)=>{
        dispatch({type:'edit_blogPost',payload:{id,title,content}});
        if(callback){
            callback();
        }
    }
}
export const {Context,Provider}=createDataContext(blogReducer,{addBlogPost,deleteBlogPost,editBlogPost,getBlogPost},[]);