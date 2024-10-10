# MMUST-JOSA Backend

This project contains code for a blogging web application that will enable users to easily share, express and publish content in the form of blogs.

<div align="center">

**Things to take note of**

#### dev_base_url: http://164.92.165.41

#### prod_base_url: ""

</div>

### Technologies Used

- _python_
- _flask_

## Getting Started

### Installations

You can use the git clone command as follows:

```sh
user@username:~$ git clone https://github.com/BudhaBudha/Mmust-Jowa.git
user@username:~$ cd  Mmust-Jowa
user@username:~$ python -m venv my_venv # create a virtual env to manage your dependecies
user@username:~$ source my_venv/bin/activate  # for linux users
user@username:~$ pip3 install -r requirements.txt  #install all the dependecies used in this project
user@username:~$ flask run  # use this command to start the server
```

# USERS

## Home page of the blog app

A limited number of blogs from each category are displayed here . Blogs are displayed according to the time they were created with the latest blog being the first.

- url: GET [{{dev_base_url}}/api/v1/user/]()

- The response body of the _ *RESPONSE*_ have the following fields

        +
      ```python
      Exampe of a Response Body:

       {
      "Business": [],
      "Entertainment": [],
      "News": [
          {
              "author": "Lila Walker",
              "headline": "Animi et officiis dolores. In praesentium enim quia voluptas enim exercitationem cupiditate voluptatibus. Temporibus ex dolores sed odio minima odio id. Ut quasi ea at.",
              "id": 2,
              "image": "https://res.cloudinary.com/dqrw1zi7d/image/upload/v1728562068/Mmust-Josa_1728562067.jpg",
              "published_on": "Thu, 10 Oct 2024 11:55:06 GMT",
              "slug": "qui-ad-sed-unde.",
              "title": "Qui ad sed unde."
          },
      ],
      "Sports": []

  }
  ```

- Note: Only three blogs per category are returned in the response

## News Blogs

when a user clicks on the news button on the navbar, the frontend sends a request to the backed which then returnes all blogs associated with the news category.

- url: GET [{{dev_base_url}}/api/v1/user/news]()

- The response body is a list/array of all the news blogs.
- ```json
  [
    {
      "headline": "Ipsa eum veniam aut in quam dicta. Qui est aliquam. Molestiae fugiat ut debitis. Quibusdam adipisci maiores aliquid ..",
      "image": "https://res.cloudinary.com/dqrw1zi7d/image/upload/v1728561924/Mmust-Josa_1728561924.jpg",
      "published_on": "Thu, 10 Oct 2024 11:55:06 GMT",
      "slug": "rerum-laborum-rem.",
      "title": "Rerum laborum rem."
    }
  ]
  ```

## Business Blogs

when a user clicks on the business button on the navbar, the frontend sends a request to the backed which then returnes all blogs associated with the business category.

- url: GET [{{dev_base_url}}/api/v1/user/business]()

- The response body is a list/array of all the business blogs.

- ```json
  [
    {
      "headline": "Ipsa eum veniam aut in quam dicta. Qui est aliquam. Molestiae fugiat ut debitis. Quibusdam adipisci maiores aliquid ..",
      "image": "https://res.cloudinary.com/dqrw1zi7d/image/upload/v1728561924/Mmust-Josa_1728561924.jpg",
      "published_on": "Thu, 10 Oct 2024 11:55:06 GMT",
      "slug": "rerum-laborum-rem.",
      "title": "Rerum laborum rem."
    }
  ]
  ```

## Sports Blogs

- url: GET [{{dev_base_url}}/api/v1/user/sports]()

- ```json
  [
    {
      "headline": "Ipsa eum veniam aut in quam dicta. Qui est aliquam. Molestiae fugiat ut debitis. Quibusdam adipisci maiores aliquid ..",
      "image": "https://res.cloudinary.com/dqrw1zi7d/image/upload/v1728561924/Mmust-Josa_1728561924.jpg",
      "published_on": "Thu, 10 Oct 2024 11:55:06 GMT",
      "slug": "rerum-laborum-rem.",
      "title": "Rerum laborum rem."
    }
  ]
  ```

## Entertainment Blogs

- url: GET [{{dev_base_url}}/api/v1/user/entertainment]()
- ```json
  [
    {
      "headline": "Ipsa eum veniam aut in quam dicta. Qui est aliquam. Molestiae fugiat ut debitis. Quibusdam adipisci maiores aliquid ..",
      "image": "https://res.cloudinary.com/dqrw1zi7d/image/upload/v1728561924/Mmust-Josa_1728561924.jpg",
      "published_on": "Thu, 10 Oct 2024 11:55:06 GMT",
      "slug": "rerum-laborum-rem.",
      "title": "Rerum laborum rem."
    }
  ]
  ```

## Single Blog

when a user clicks on a single blog, the frontend sends a request with the image_id related to the blog and the category of the blog to the backed where the backend returns all the info related to the blog. on the url below, replace CATEGORY with the the blog category ie Business and imaged_id with the image id.

- url: GET [{{dev_base_url}}/api/v1/user/{category}/{slug}]()
- where the category is either news, business and the slug of the blog

- ```json
  {
    "author": "Lila Walker",
    "author_image": "https://www.gravatar.com/avatar/cba1f2d695a5ca39ee6f343297a761a4?d=retro&s=80",
    "comments": [],
    "content": "Temporibus laudantium qui hic ut beatae. Dolor eligendi occaecati rem assumenda incidunt....",
    "headline": "Ipsa eum veniam aut in quam dicta. Qui est aliquam. ..",
    "id": 1,
    "image": "https://res.cloudinary.com/dqrw1zi7d/image/upload/v1728561924/Mmust-Josa_1728561924.jpg",
    "published_on": "Thu, 10 Oct 2024 11:55:06 GMT",
    "slug": "rerum-laborum-rem.",
    "title": "Rerum laborum rem."
  }
  ```

## Latest Blog per category

- url: GET [{{dev_base_url}}/api/v1/user/post/latest]()

- ```json
    {
      "business": {
        "headline": "Alias odio laborum quae deleniti et atque tempora. Tenetur sit ea dolores quidem eligendi. Temporibus non est distinctio repellat eum.",
        "image": "https://res.cloudinary.com/dqrw1zi7d/image/upload/v1728562422/Mmust-Josa_1728562422.jpg",
        "published_on": "Thu, 10 Oct 2024 12:10:53 GMT",
        "slug": "magnam-ducimus-similique-laborum-sit-velit-esse-molestias-vitae-ducimus.",
        "title": "Magnam ducimus similique laborum sit velit esse molestias vitae ducimus."
      }
    }

  ```

## User Blogs

This endpoint return all the blog associated with the author.

- url: GET [{{dev_base_url}}/api/v1/user/authorposts/{fullname}]()

  - where fullname is the name of the author

- ```python

  Exampe of a Response Body
    [
      1,
      [
        {
          "image_id": "123.5.jpg",
          "published_on": "Sun, 12 Nov 2023 11:15:13 GMT",
          "slug": "This is image with id: 123.5.jpg",
          "title": "This title was updated by daniel gathaga"
        }
      ]
    ]
  ```

* where 1 is the total number of blogs writen by the author

## Create Comment

when a user clicks on a single blog, the frontend sends a request with the image_id related to the blog and the category of the blog to the backed where the backend returns all the info related to the blog. on the url below, replace CATEGORY with the the blog category ie Business and imaged_id with the image id.

- url: POST [{{dev_base_url}}/api/v1/user/comment/category>/< id>]()
- where the category is either News, Business and the id is the image
- and id is the id associated with that blog

- ```python
  Request Body:
      content: string
      is_anonymous: bool optional

  ```
  The status_code of the response == 201 if the comment was created successfully else a bad request error(400) error is thrown. user should ensure that comment textbox is filled.

# ADMIN

## Admin registration

#### Admin gets registered to the system by making a request to the endpoint below

- url: POST [{{dev_base_url}}/api/v1/auth/register]()

```python
 headers:
     Content-type: application/json

request body:
    first_name: string,
    last_name: string,
    email: string,
    password: string,
    confirm: string
```

The status_code of the response == 201 if the registration is successfull else returns a bad request error.(400).
user should double check the registration credentials.

## Admin Login

#### Admin gets logged into the system by making a post request to the following endpoint

- url: POST [{{dev_base_url}}/api/v1/auth/login]()

  ```python
   headers:
       Content-type: application/json

  request body:
      email: string,
      password: string
  ```

  User is given an access and a refresh token, while The status_code of the response == 200 if the login is successfull else returns unauthorized error.(401).

## Total Blogs

#### On the dashboard, admin is able to see the total number of blogs. he/she has written.

- url: GET [{{dev_base_url}}/api/v1/admin/total/blogs]()
- ```python
  headers:
    content-type: application/json
    Authorization: Bearer <token>
  ```
- ```python

  Example of a response  body.

  10
  ```

  - where 10 is the total number of blogs.

  The status_code of the response == 200 if the get request was successful else Unauthorized error (401) is thrown. user should ensure that all the access token is valid.

## Total Comments

#### On the dashboard, admin is able to see the total comments of the blogs. he/she has written.

- url: GET [{{dev_base_url}}/api/v1/admin/total/comments]()
- ```python
  headers:
    content-type: application/json
    Authorization: Bearer <token>
  ```
- ```python

  Example of a response  body.

  10
  ```

  - where 10 is the total number of comments.

  The status_code of the response == 200 if the get request was successful else Unauthorized error (401) is thrown. user should ensure that all the access token is valid.

## Latest Five News Blogs

#### On the dashboard, admin is able to see latest five news blogs that he/she has written.

- url: GET [{{dev_base_url}}/api/v1/admin/news/latest]()
- ```python
  headers:
    content-type: application/json
    Authorization: Bearer <token>
  ```
- ```python
  The response is an array containing five elements.

  Example of a response body of a single element in an array
     {
  "id": 7,
  "image": "1234.jpg",
  "published_on": "Mon, 13 Nov 2023 20:47:48 GMT",
  "title": "This news blog was added by daniel",
  "total_comments": 3
  }
  ```

  The status_code of the response == 200 if the get request was successful else Unauthorized error (401) is thrown. user should ensure that the access token is valid.

## Update News Blogs On the dashboard.

#### Since only the latest five news blogs are displayed on the dahboard, the admin may need to upadate them.

- url: PUT [{{dev_base_url}}/api/v1/admin/news/latest/update/< id>]()
- ```python
  headers:
    content-type: application/json
  ```
- ```python
  Request Body:
      title: string
      slug: string
      body: string

  Example of a request body
     {
      "title": "This is an updated title",
      "slug": "This is an updated description",
      "body": "This is an updated body"
     }
  ```

  The status_code of the response == 202 if the blog was updated successfully else a not found error(404) is thrown. user should ensure that the id provided is valid.

## Delete News Blogs On the Dashboard

#### Admin has the previledge to delete any of the latest news blogs

- url: DELETE [{{dev_base_url}}/api/v1/admin/news/latest/delete/< id>]()
- ```python
  headers:
    content-type: application/json
  ```
  The status_code of the response == 204 if the blog was deleted successfully else a not found error(404) is thrown. user should ensure that the image id provided is valid.

## All News Blogs

#### The admin is able to get all the news blogs associated with him/her.

- url: GET [{{dev_base_url}}/api/v1/admin/blogs/news]()
- ```python
  headers:
    content-type: application/json
    Authorization: Bearer <token>
  ```
- ```python
  The response is an array containing all news blogs and associated comments.

  Example of a response body of a single element in the array
     {
  "body": "These sectors will be a tool for integrating communities while advancing ",
  "comments": [
    {
      "commented_on": "Sun, 12 Nov 2023 09:40:15 GMT",
      "content": "This is another  cool blog",
      "is_anonymous": false
    },
    {
      "commented_on": "Sun, 12 Nov 2023 09:40:15 GMT",
      "content": "This is another  cool blog",
      "is_anonymous": true
    },
  ],
  "image_id": "123457.jpg",
  "published_on": "Fri, 10 Nov 2023 13:12:40 GMT",
  "slug": "The problems in Meru are a mix of politics and cultural hate for women ",
  "title": "The problems in Meru are a mix of politics and cultural hate for women"
  }
  ```

  The status_code of the response == 200 if the get request was successful else Unauthorized error (401) is thrown. user should ensure that the access token is valid. ### Total Number of News Post

      + url: GET [{{dev_base_url}}/api/v1/admin/total/news]()
      +
         ```python
         headers:
           content-type: application/json
           Authorization: Bearer <token>
         ```
         +
           ```python

           Example of a response  body.
           10
             ```
         - where 10 is the total number of news post.

         The status_code of the response == 200 if the get request was successful else Unauthorized error (401) is thrown. user should ensure that all the access token is valid.
      ### Total Number of comments associated with news posts

      + url: GET [{{dev_base_url}}/api/v1/admin/total/news/comments]()
      +
         ```python
         headers:
           content-type: application/json
           Authorization: Bearer <token>
         ```
         +
           ```python

           Example of a response  body.
           10
             ```
         - where 10 is the total number of comments post.

         The status_code of the response == 200 if the get request was successful else Unauthorized error (401) is thrown. user should ensure that all the access token is valid.

## All Business Blogs

#### The admin is able to get all busness blogs associated with him/her.

- url: GET [{{dev_base_url}}/api/v1/admin/blogs/business]()
- ```python
  headers:
    content-type: application/json
    Authorization: Bearer <token>
  ```
- ```python
  The response is an array containing all business blogs and associated comments.

  Example of a response body of a single element in the array
     {
  "body": "These sectors will be a tool for integrating communities while advancing ",
  "comments": [
    {
      "commented_on": "Sun, 12 Nov 2023 09:40:15 GMT",
      "content": "This is another  cool blog",
      "is_anonymous": false
    },
    {
      "commented_on": "Sun, 12 Nov 2023 09:40:15 GMT",
      "content": "This is another  cool blog",
      "is_anonymous": true
    },
  ],
  "image_id": "123457.jpg",
  "published_on": "Fri, 10 Nov 2023 13:12:40 GMT",
  "slug": "The problems in Meru are a mix of politics and cultural hate for women ",
  "title": "The problems in Meru are a mix of politics and cultural hate for women"
  }
  ```

  The status_code of the response == 200 if the get request was successful else Unauthorized error (401) is thrown. user should ensure that the access token is valid.

  ### Total Number of Business Post

      + url: GET [{{dev_base_url}}/api/v1/admin/total/business]()
      +
         ```python
         headers:
           content-type: application/json
           Authorization: Bearer <token>
         ```
         +
           ```python

           Example of a response  body.
           10
             ```
         - where 10 is the total number of news post.

         The status_code of the response == 200 if the get request was successful else Unauthorized error (401) is thrown. user should ensure that all the access token is valid.
      ### Total Number of comments associated with business posts

      + url: GET [{{dev_base_url}}/api/v1/admin/total/business/comments]()
      +
         ```python
         headers:
           content-type: application/json
           Authorization: Bearer <token>
         ```
         +
           ```python

           Example of a response  body.
           10
             ```
         - where 10 is the total number of comments post.

         The status_code of the response == 200 if the get request was successful else Unauthorized error (401) is thrown. user should ensure that all the access token is valid.

## All Sports Blogs

#### The admin is able to get all sports blogs associated with him/her.

- url: GET [{{dev_base_url}}/api/v1/admin/blogs/sports]()
- ```python
  headers:
    content-type: application/json
    Authorization: Bearer <token>
  ```

  The status_code of the response == 200 if the get request was successful else Unauthorized error (401) is thrown. user should ensure that the access token is valid.

  ### Total Number of Sports Post

      + url: GET [{{dev_base_url}}/api/v1/admin/total/sports]()
      +
         ```python
         headers:
           content-type: application/json
           Authorization: Bearer <token>
         ```
         +
           ```python

           Example of a response  body.
           10
             ```
         - where 10 is the total number of news post.

         The status_code of the response == 200 if the get request was successful else Unauthorized error (401) is thrown. user should ensure that all the access token is valid.
      ### Total Number of comments associated with sports posts

      + url: GET [{{dev_base_url}}/api/v1/admin/total/sports/comments]()
      +
         ```python
         headers:
           content-type: application/json
           Authorization: Bearer <token>
         ```
         +
           ```python

           Example of a response  body.
           10
             ```
         - where 10 is the total number of comments post.

         The status_code of the response == 200 if the get request was successful else Unauthorized error (401) is thrown. user should ensure that all the access token is valid.

## All Entertainment Blogs

#### The admin is able to get all entertainment blogs associated with him/her.

- url: GET [{{dev_base_url}}/api/v1/admin/blogs/entertainment]()
- ```python
  headers:
    content-type: application/json
    Authorization: Bearer <token>
  ```

  The status_code of the response == 200 if the get request was successful else Unauthorized error (401) is thrown. user should ensure that the access token is valid.

  ### Total Number of Entertainment Post

      + url: GET [{{dev_base_url}}/api/v1/admin/total/entertainment]()
      +
         ```python
         headers:
           content-type: application/json
           Authorization: Bearer <token>
         ```
         +
           ```python

           Example of a response  body.
           10
             ```
         - where 10 is the total number of news post.

         The status_code of the response == 200 if the get request was successful else Unauthorized error (401) is thrown. user should ensure that all the access token is valid.
      ### Total Number of comments associated with entertainment posts

      + url: GET [{{dev_base_url}}/api/v1/admin/total/entertainment/comments]()
      +
         ```python
         headers:
           content-type: application/json
           Authorization: Bearer <token>
         ```
         +
           ```python

           Example of a response  body.
           10
             ```
         - where 10 is the total number of comments post.

         The status_code of the response == 200 if the get request was successful else Unauthorized error (401) is thrown. user should ensure that all the access token is valid.

## Create Blogs

#### After being logged into the system, admin can be able to create a blog.

- url: POST [{{dev_base_url}}/api/v1/admin/createblog]()
- ```python
  headers:
    content-type: application/json
    Authorization: Bearer <token>
  ```
- ```python
  Request Body:
      title: string
      slug: string
      body: string
      image_id: string
      category: string

  Example of a request body
     {
      "title": "Title of the blog",
      "slug": "a brief description about the blog",
      "body": "The body of the blog",
      "image_id": "A unique id of an image associated with the blog",
      "category": "Either of the following: [News, Business, Sports, Entertainment]"

     }
  ```

  The status_code of the response == 201 if the blog was created successfully else a bad request error(400) is thrown. user should ensure that all the fields above are included.

## Update Blogs

#### After being logged into the system, admin can be able to update a blog.

- url: POST [{{dev_base_url}}/api/v1/admin/blogs/update /category/<blog_id>]()
- replace category with the blog category ie News, Business
- replace blog_id with the specific blog id ie 1, 2, 3
- ```python
  headers:
    content-type: application/json
  ```
- ```python
  Request Body:
      title: string
      slug: string
      body: string
      image_id: string
      category: string

  Example of a request body
     {
      "title": "This is an updated title",
      "slug": "This is an updated description",
      "body": "This is an updated body",
      "image": "This is an updated image",
      "category": "Either of the following: [News, Business, Sports, Entertainment]"

     }
  ```

  The status_code of the response == 202 if the blog was updated~ successfully else a bad request error(400) is thrown. user should ensure that all the fields above are included.

## Delete Blogs

#### Admin has the previledge to delete any of his/her blogs

- url: DELETE [{{dev_base_url}}/api/v1/admin/blogs/delete/category/<id>]()
  - replace category with the exact category
  - replace <id> with the specific blog id
- ```python
  headers:
    content-type: application/json
  ```
  The status_code of the response == 204 if the blog was deleted successfully else a not found error(404) is thrown. user should ensure that the image id provided is valid.
    <br>

# ADMIN PROFILE

## Updating admin profile

- url: PUT [{{dev_base_url}}/api/v1/admin/update/profile]()
- ```python
  headers:
    content-type: application/json
    Authorization: Bearer <token>
  ```
- ```python
  Request Body:
      image: base64 optional
      first_name: string optional
      last_name: string optional
      contact: string optional
  ```
  The status_code of the response == 202 if the profile was updated successfully else Unaunthorized(401) error is thrown. user should ensure that the oldpassword is correct and the access token provided is valid.

## Get All Admin Profile Info

- url: GET [{{dev_base_url}}/api/v1/admin/get/profile]()
- ```python
  headers:
    content-type: application/json
    Authorization: Bearer <token>
  ```
- ```python
  {
    "contact": "12345678",
    "first_name": "Antony",
    "last_name": "Kariuki",
    "image_id": null
  }

  ```

  The status_code of the response == 200 if the data fetching was a success else Unaunthorized(401) error is thrown. user should ensure that the token provided is valid.
