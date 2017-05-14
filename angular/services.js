myApp.factory('BlogService',function BlogFactory($http){

	// this method first 
	var blogAPIS  =  {};
	var baseUrl = 'https://projectsapi.edwisor.com/api/blogs';



	blogAPIS.getAllBlogs = function(){

		return $http({

		  method: 'GET',
		  url: baseUrl+'/all'

		})	


	}// end get All Blogs

	blogAPIS.getSingleBlog = function(blogId){

		return $http.get(baseUrl+'/'+blogId)
	}

	blogAPIS.createABlog = function(blogData){

		return $http.post(baseUrl+'/create',blogData);

	}// end create blog 

	blogAPIS.editABlog = function(blogId,blogData){

		return $http.put(baseUrl+'/'+blogId+'/edit',blogData)

	}// end edit blog 

	blogAPIS.deleteBlog = function(blogId){

		return $http.post(baseUrl+'/'+blogId+'/remove',null);

	}// end delete blog

	return blogAPIS;



});//end blog service 
