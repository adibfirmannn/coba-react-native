import React, { Component, useEffect, useState } from "react";
import { Text, View, Image } from "react-native";
import github from "../../assets/image/github.png";

// class FlexBox extends Component {
//   constructor(props) {
//     super(props);
//     console.log("ini constructor");
//     this.state = {
//       follower: 200,
//     };
//   }

//   componentDidMount() {
//     console.log("ini componentdidmount");
//     setTimeout(() => {
//       this.setState({
//         follower: 400,
//       });
//     }, 2000);
//   }

//   componentDidUpdate() {
//     console.log("ini componentdidupdate");
//   }

//   componentWillUnmount() {
//     console.log("ini componentunmount");
//   }

//   render() {
//     console.log("ini render");
//     return (
//       <View>
//         <View style={{ flexDirection: "row", backgroundColor: "#c8d6e5", alignItems: "center", justifyContent: "space-between" }}>
//           <View style={{ backgroundColor: "#ee5253", width: 50, height: 50 }}></View>
//           <View style={{ backgroundColor: "#feca57", width: 50, height: 50 }}></View>
//           <View style={{ backgroundColor: "#1dd1a1", width: 50, height: 50 }}></View>
//           <View style={{ backgroundColor: "#5f27cd", width: 50, height: 50 }}></View>
//         </View>
//         <View style={{ flexDirection: "row", marginTop: 20 }}>
//           <Image source={github} style={{ width: 50, height: 50, borderRadius: 30 }} />
//           <View style={{ justifyContent: "center", marginLeft: 10 }}>
//             <Text style={{ fontSize: 16, fontWeight: "bold" }}>Muhammad Adib Firmansyah</Text>
//             <Text>{this.state.follower} Follower</Text>
//           </View>
//         </View>
//         <View style={{ flexDirection: "row", justifyContent: "space-around", marginTop: 20 }}>
//           <Text>Home</Text>
//           <Text>About</Text>
//           <Text>Project</Text>
//           <Text>Setting</Text>
//         </View>
//       </View>
//     );
//   }
// }

const FlexBox = () => {
  const [follower, setFollower] = useState(200);
  useEffect(() => {
    console.log("did mount");
    setTimeout(() => {
      setFollower(400);
    }, 2000);
    return () => {
      console.log("did update");
    };
  }, [follower]);
  // useEffect(() => {
  //   console.log("did update");
  //   setTimeout(() => {
  //     setFollower(400);
  //   }, 2000);
  // }, [follower]);
  return (
    <View>
      <View style={{ flexDirection: "row", backgroundColor: "#c8d6e5", alignItems: "center", justifyContent: "space-between" }}>
        <View style={{ backgroundColor: "#ee5253", width: 50, height: 50 }}></View>
        <View style={{ backgroundColor: "#feca57", width: 50, height: 50 }}></View>
        <View style={{ backgroundColor: "#1dd1a1", width: 50, height: 50 }}></View>
        <View style={{ backgroundColor: "#5f27cd", width: 50, height: 50 }}></View>
      </View>
      <View style={{ flexDirection: "row", marginTop: 20 }}>
        <Image source={github} style={{ width: 50, height: 50, borderRadius: 30 }} />
        <View style={{ justifyContent: "center", marginLeft: 10 }}>
          <Text style={{ fontSize: 16, fontWeight: "bold" }}>Muhammad Adib Firmansyah</Text>
          <Text>{follower} Follower</Text>
        </View>
      </View>
      <View style={{ flexDirection: "row", justifyContent: "space-around", marginTop: 20 }}>
        <Text>Home</Text>
        <Text>About</Text>
        <Text>Project</Text>
        <Text>Setting</Text>
      </View>
    </View>
  );
};

export default FlexBox;
