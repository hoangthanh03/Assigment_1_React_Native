// Import các hàm cần thiết từ Firebase SDK
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Cấu hình dự án Firebase của bạn
const firebaseConfig = {
  apiKey: "AIzaSyATE0q-NEn-id1I5io_SNcQiqTQ-lB-5Rg",
  authDomain: "assigment-react-e97e9.firebaseapp.com",
  projectId: "assigment-react-e97e9",
  storageBucket: "assigment-react-e97e9.appspot.com",
  messagingSenderId: "303431964206",
  appId: "1:303431964206:web:d553b71c01e56761a871bf",
  measurementId: "G-NPGJ22S7H8" // Tuỳ chọn
};

// Khởi tạo ứng dụng Firebase với cấu hình được cung cấp
const app = initializeApp(firebaseConfig);

// Khởi tạo xác thực Firebase và export nó
export const FirebaseAuth = getAuth(app);

// Khởi tạo Firestore Firebase và export nó
export const FirebaseStore = getFirestore(app);

// Export app nếu cần thiết
export default app;
