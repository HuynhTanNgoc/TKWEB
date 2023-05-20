function timGiaTriLonNhat(so) {
    let max = so[0];
    // Viết mã ở đây
    for(var i = 1;i<10; i++){
        if (so[i] > max){
            max = so[i]
        }
    }
    return max;
    }
    // Ví dụ sử dụng
    console.log(timGiaTriLonNhat([5, 8, 3, 2, 9])); // Kết quả: 9