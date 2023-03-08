import SmallSetPaginationSearch from "components/pagination/SmallSetPaginationSearch"
import BlogCardSearch from "../BlogCardSearch"



function BlogList({posts, get_blog_list_page, count, term}){
    return(
        <div className="overflow-hidden px-8 bg-white">
        <ul role="list" className="divide-y space-y-4 gap-8 divide-gray-100">
          {posts&&posts.map((post, index) => (
            <BlogCardSearch data={post} key={index} index={index}/>
          ))}
        </ul>
        <SmallSetPaginationSearch list_page={get_blog_list_page} term={term} list={posts} count={count}/>
      </div>
    )
}
export default BlogList