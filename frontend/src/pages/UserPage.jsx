import { useEffect, useState } from "react";
import UserHeader from "../components/UserHeader";
import { useParams } from "react-router-dom";
import UserPost from "../components/UserPost";

const UserPage = () => {
  const [user, setUser] = useState(null);
  const { username } = useParams();

  useEffect(() => {
    const getUser = async () => {
      // if (!user) return;
      // setFetchingPosts(true);
      try {
        const res = await fetch(`/api/users/profile/${username}`);
        const data = await res.json();
        console.log(data);
        // setPosts(data);
      } catch (error) {
        // showToast("Error", error.message, "error");
        // setPosts([]);
        console.log(error);
      }
      // finally {
      //   setFetchingPosts(false);
      // }
    };
    getUser();
  }, [username]);

  return (
    <>
      <UserHeader />
      <UserPost
        likes={1200}
        replies={481}
        postImg="/post1.png"
        postTitle="lets start"
      />
      <UserPost
        likes={451}
        replies={12}
        postImg="/post2.png"
        postTitle="Nyc one"
      />
      <UserPost
        likes={321}
        replies={41}
        postImg="/post3.png"
        postTitle="spacce is great"
      />
      <UserPost likes={11} replies={81} postTitle="first" />
    </>
  );
};

export default UserPage;
