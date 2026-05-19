import * as xlsx from 'xlsx';
import axios from 'axios';

// Đường dẫn tới file Excel tổng hợp 268 sản phẩm
const FILE_EXCEL = './Vimet_Products_Merged_Final.xlsx'; 
// Địa chỉ nhận dữ liệu của json-server
const API_URL = 'http://localhost:3001/products'; 

async function startImport() {
  try {
    console.log('📦 Đang mở file Excel...');
    const workbook = xlsx.readFile(FILE_EXCEL);
    const sheetName = workbook.SheetNames[0]; // Lấy trang tính đầu tiên
    const data = xlsx.utils.sheet_to_json(workbook.Sheets[sheetName]);

    console.log(`🔍 Tìm thấy ${data.length} sản phẩm từ Excel. Bắt đầu đẩy lên API...`);

    for (let i = 0; i < data.length; i++) {
      const item = data[i];
      try {
        // Thực hiện lệnh POST để gửi dữ liệu sản phẩm lên API
        await axios.post(API_URL, item);
        console.log(`✅ Đã thêm thành công: ${item.name || item.slug}`);
      } catch (err) {
        console.log(`❌ Lỗi ở dòng ${i + 2}:`, err.message);
      }
    }
    console.log('🎉 Hoàn tất! Đã cất hết dữ liệu vào kho db.json.');
  } catch (error) {
    console.log('🚨 Lỗi: Không tìm thấy file Excel. Bạn đã tải file "Vimet_Products_Merged_Final.xlsx" về và bỏ vào thư mục gốc chưa?');
  }
}

startImport();