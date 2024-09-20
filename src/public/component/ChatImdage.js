// import React, { useState } from "react";
// import ImageGallery from "react-image-gallery";
// import Box from "@mui/material/Box";
// import Modal from "@mui/material/Modal";
// import Button from "@mui/material/Button";
// import "react-image-gallery/styles/css/image-gallery.css";

// const images = [
//   {
//     original: "https://placekitten.com/800/400",
//     thumbnail: "https://placekitten.com/150/100",
//   },
//   {
//     original: "https://placekitten.com/800/401",
//     thumbnail: "https://placekitten.com/150/101",
//   },
//   {
//     original: "https://placekitten.com/800/402",
//     thumbnail: "https://placekitten.com/150/102",
//   },
// ];

// const style = {
//   position: "absolute",
//   top: "50%",
//   left: "50%",
//   transform: "translate(-50%, -50%)",
//   width: "80%",
//   bgcolor: "background.paper",
//   boxShadow: 24,
//   p: 4,
// };

// function ImageModal() {
//   const [open, setOpen] = useState(false);

//   const handleOpen = () => setOpen(true);
//   const handleClose = () => setOpen(false);

//   return (
//     <div>
//       <Button onClick={handleOpen} variant="contained" color="primary">
//         Xem ảnh
//       </Button>

//       {/* MUI Modal */}
//       <Modal
//         open={open}
//         onClose={handleClose}
//         aria-labelledby="modal-title"
//         aria-describedby="modal-description"
//       >
//         <Box sx={style}>
//           <ImageGallery items={images} showThumbnails={true} />
//           <Button
//             onClick={handleClose}
//             variant="contained"
//             color="secondary"
//             sx={{ mt: 2 }}
//           >
//             Đóng
//           </Button>
//         </Box>
//       </Modal>
//     </div>
//   );
// }

// export default ImageModal;
