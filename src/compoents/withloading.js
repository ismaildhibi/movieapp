import React from 'react';
function WithLoading(Component) {
  return function WihLoadingComponent({ isLoading, ...props }) {
    if (!isLoading) return (<Component {...props} />);
    return (<img src='https://media0.giphy.com/media/10kTz4r3ishQwU/giphy.gif?cid=790b7611d2d49d841e6855ea6d7c43bb8297a43943c74fa6&rid=giphy.gif(30 ko)
    https://media0.giphy.com/media/10kTz4r3ishQwU/giphy.gif?cid=790b7611d2d49d841e6855ea6d7c43bb8297a43943c74fa6&rid=giphy.gif
    ' alt="spinner" />);
  }
}
export default WithLoading;