export abstract class TaiLieu {

    maTaiLieu: number;
    tenNhaXuatBan: string;
    soLuong: number

    constructor(maTaiLieu: number, tenNhaXuatBan: string, soLuong: number) {
        this.maTaiLieu = maTaiLieu;
        this.soLuong = soLuong;
        this.tenNhaXuatBan = tenNhaXuatBan

    }

}

export class Sach extends TaiLieu {
    ten: string
    Sach: string = 'sach';
    tenTacGia: string;
    soTrang: number

    constructor(maTaiLieu: number, tenNhaXuatBan: string, soLuong: number, tenTacGia: string, soTrang: number, ten: string) {
        super(maTaiLieu, tenNhaXuatBan, soLuong);
        this.maTaiLieu = maTaiLieu;
        this.soLuong = soLuong;
        this.tenNhaXuatBan = tenNhaXuatBan
        this.tenTacGia = tenTacGia;
        this.soTrang = soTrang;
        this.ten = ten;


    }
}


export class TapChi extends TaiLieu {
    TapChi: string = 'tapchi';
    ten: string
    soPhatHanh: string;
    thangPhatHanh: number

    constructor(maTaiLieu: number, tenNhaXuatBan: string, soLuong: number, soPhatHanh: string, thangPhatHanh: number, ten: string) {
        super(maTaiLieu, tenNhaXuatBan, soLuong);


        this.soPhatHanh = soPhatHanh;
        this.thangPhatHanh = thangPhatHanh;
        this.ten = ten;


    }
}


export class Bao extends TaiLieu {
    Bao: string = 'bao';
    ngayPhatHanh: string;
    ten: string

    constructor(maTaiLieu: number, tenNhaXuatBan: string, soLuong: number, ngayPhatHanh: string, ten: string) {
        super(maTaiLieu, tenNhaXuatBan, soLuong);
        this.soLuong = soLuong;
        this.ngayPhatHanh = ngayPhatHanh;
        this.maTaiLieu = maTaiLieu
        this.tenNhaXuatBan = tenNhaXuatBan;
        this.ten = ten;

    }
}

