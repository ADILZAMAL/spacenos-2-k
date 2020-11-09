import { db } from "../firebase";
import { addAllUsers } from "./user";
import { addAllFriends } from "./friend";
const authMiddleware = ({ dispatch }) => (next) => (action) => {
  if (action.type === "user/loginSuccessfull") {
    const uid = action.payload.uid;
    db.collection("users").onSnapshot((snapshot) => {
      const users = [];
      //   // snapshot.docs.map((doc) => users.push(doc.data()));
      snapshot.docs.forEach((doc) => {
        if (doc.data().uid !== uid) users.push(doc.data());
      });
      // snapshot.doc(uid).docs.forEach((doc) => {
      // friends.push(doc.data());
      // });

      dispatch(addAllUsers(users));
      // console.log(data.data());
      // const friends = data.data().friends;
      // dispatch(addFriends(friends));
      // // dispatch(addTotalUsers(data.docs));
      // data.docs.forEach((dcm) => {
      //   const id = dcm.id;

      //   const temp = db.collection("users").doc(id);
      //   temp.get().then((doc) => {
      //     users.push(doc.data());
      //     // users = [...users, doc.data()];
      //   });
      // });
      // console.log(JSON.stringify(users));
      // / / / dispatch(addTotalUsers(users));
    });

    db.collection("users")
      .doc(uid)
      .collection("friends")
      .onSnapshot((snapshot) => {
        const friends = [];

        snapshot.docs.forEach((doc) => friends.push(doc.data()));
        dispatch(addAllFriends(friends));
      });
    next(action);
    return;
  } else {
    next(action);
  }
};
export default authMiddleware;
