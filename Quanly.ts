import {Sach} from "./tailieu";
import {TapChi} from "./tailieu";
import {Bao} from "./tailieu";
import {TaiLieu} from "./tailieu";


class QuanLy {

    static listTaiLieu: any [] = [];


    constructor() {
    }

    static add(taiLieu: any): void {
        QuanLy.listTaiLieu.push(taiLieu)
    }

    static display(): void {
        for (let taiLieu of QuanLy.listTaiLieu) {
            console.table(taiLieu);
        }
    }

    static delete(maTaiLieu: number): void {
        for (let i = 0; i < QuanLy.listTaiLieu.length; i++) {
            if (QuanLy.listTaiLieu[i].maTaiLieu === maTaiLieu) {
                QuanLy.listTaiLieu.splice(i, 1);
            }
        }
        QuanLy.display()
    }

    static find(ten: string): void {


        for (let i = 0; i < QuanLy.listTaiLieu.length; i++) {
            if (QuanLy.listTaiLieu[i].ten === ten) {
                console.table(QuanLy.listTaiLieu[i])
            }
        }
    }


    static find1(a: string) {


        for (let i of this.listTaiLieu) {
            if (a === i.Bao) {
                console.table(i)
            }
            if (a === i.Sach) {
                console.table(i)
            }
            if (a === i.TapChi) {
                console.table(i)
            }


        }
    }


    static edit(id:number,object:TaiLieu){
        for (let i = 0; i < this.listTaiLieu.length; i++){
            if ( this.listTaiLieu[i].maTaiLieu === id){
                this.listTaiLieu[i] =object
            }
        }
        return this.display()
    }
}


// let truyen: Sach = new Sach(1, 'Lộc', 10, 'Vietnam', 100, 'toan')
// let truyen1: Sach = new Sach(10, 'Tú', 90, 'Vietnam', 100, 'hóa')
// let bao: TapChi = new TapChi(2, 'Kỳ', 20, '10', 50, 'văn')
// let bao1: TapChi = new TapChi(5, 'Nam', 100, '10', 50, 'sử')
// let tapchi: Bao = new Bao(3, 'Kỳ', 20, '30', 'lý')
// let tapchi1: Bao = new Bao(4, 'Kỳ', 50, '20', 'địa')
// let tapchi2: Bao = new Bao(4, 'Linh', 40, '20', 'sinh')

// QuanLy.add(truyen);
// QuanLy.add(bao);
// QuanLy.add(tapchi);
// QuanLy.add(tapchi1);
// QuanLy.add(bao1);
// QuanLy.add(truyen1);
// QuanLy.display()
//  QuanLy.delete(10);
// QuanLy.find('lý')
//  QuanLy.find1('sach')
// QuanLy.edit(1,tapchi2)
