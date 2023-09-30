import UserHeader from "../components/UserHeader";
import UserPost from "../components/UserPost";

const UserPage = () => {
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
