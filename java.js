//hàm này sẽ thực thi khi ta click vào thẻ a
function function_search()
{
    //lấy thẻ a
    var a=document.getElementById('show');
    //lấy thẻ ẩn
    var category=document.getElementById('select1');
    //lấy nội dung thẻ a
    var text=a.innerHTML;
    //set từng nội dung
    if (text== 'Hiển thị thông tin tìm kiếm')
    {
        //thẻ category sẽ cho xuất hiện hàng thứ 2
        category.style.display="table-row";
        //đồng thời nội dung thẻ a đổi thành bỏ hiện thị thông tin
        a.innerHTML="Bỏ hiển thị thông tin";
    }
    else{
        category.style.display="none";
        a.innerHTML="Hiển thị thông tin tìm kiếm";
    }
    return false;
}
function search() {
    alert("Bạn đã chọn thành công!");

}
