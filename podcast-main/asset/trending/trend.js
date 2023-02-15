const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const theme = $('.header__theme');
const container = $('.container');
const LoginBtn = $('.header__logo');
const line = $('.line');
const controls = $$('.control__btn');
const getSongLists =$$('.song');
const audio = $('.audio');
const progressPlay = $('.progress');
// Thay đổi background
theme.onclick = function(){
    container.classList.toggle('change')
}
// Đóng mở modal loginn ???????******************
LoginBtn.onclick = function(){
    const modal = document.getElementById('modal')
    modal.classList.add('open');
    const modalbox = $('.modal__box');
    modalbox.addEventListener('click', function(event){
        event.stopPropagation()
        
    });
    $('.Btn--ghibli').onclick = function(){
        $('.form').classList.add('open');
        const isOpenLogin = $('.form').classList.contains('open');
        if (isOpenLogin) {
            modal.onclick = function(){
                $('.form').classList.remove('open');
                modal.classList.remove('open');
            };
        }
    };
    modal.onclick = function(){
        $('.form').classList.remove('open');
        modal.classList.remove('open');
    };
    $('.form').addEventListener('click', function(event){
        event.stopPropagation();
    });
}; 
// Hành vi click chọn ListPlay tại media place


// xử lí trình phát media
const trendPage = {
    isPlaying: false,
    currentIndex : 0,
    podcasts: [
        
    ],
    musics: [
        {
            name: 'Câu hứa chưa trọn vẹn',
            path: './Music/CauHuaChuaVenTron-PhatHuyT4-7093319.mp3',
            image: './img/câu hứa chưa trọn vẹn.jpg',
            author: 'PhatHuyT4',
            duration: '4:31'
        },
        {
            name: 'Đoạn tuyệt nàng đi',
            path: './Music/DoanTuyetNangDiLofiVersion-PhatHuyT4KProx-7011827.mp3',
            image: './img/câu hứa chưa trọn vẹn.jpg',
            author: 'PhatHuyT4',
            duration: '3:52'
        },
        {
            name: 'Cố giang tình',
            path: './Music/CoGiangTinh-X2X-6257264.mp3',
            image: './img/cố giang tình.jpg',
            author: 'Phát Hồ',
            duration: '3:56'
        },
        {
            name: 'Cô thắm không về',
            path: './Music/CoThamKhongVe-PhatHoJokesBiiThien-6067247.mp3',
            image: './img/cô thăm không về.jpg',
            author: 'Phát Hồ, Jokes, BiiThien',
            duration: '4:05'
        },
        {
            name: 'Anh không tha thứ',
            path: './Music/AnhKhongThaThu-DinhDung-6684271.mp3',
            image: './img/anh không tha thứ.jpg',
            author: 'Đình Dũng',
            duration: '4:34'
        },
        {
            name: '3107LofiVersion',
            path: './Music/3107LofiVersion-WnNauDuongg-6943942.mp3',
            image: './img/3107.jpg',
            author: 'W, n, Nâu, Duong',
            duration: '2:22'
        },
        {
            name: 'Anh mệt rồi',
            path: './Music/AnhMetRoiLofiVersion-AnhQuanIdolFreakD-6811840.mp3',
            image: './img/anh mệt rồi.jpg',
            author: 'Anh Quân Idol, FreakD',
            duration: '4:22'
        },
        {
            name: 'Bỏ lỡ nhau rồi',
            path: './Music/BoLoNhauRoiLofiVersion-HaiNamFreakD-6930872.mp3',
            image: './img/bỏ lỡ nhau rồi.jpg',
            author: 'Hải Nam, FreakD',
            duration: '5:07'
        },
        {
            name: 'Chẳng ai yêu mãi một người',
            path: './Music/ChangAiYeuMaiMotNguoiLofiVersion-NB3HoaiBaoDongDangFreakD-6861156.mp3',
            image: './img/Chẳng ai yêu mãi 1 người.jpg',
            author: 'NB3 Hoài Bảo, Đồng Đăng, FreakD',
            duration: '5:03'
        },
        {
            name: 'Chỉ muốn bên em lúc này',
            path: './Music/ChiMuonBecircnEmLuacutecNagraveyFreakDLofiVersion-HuyVac-6940119.mp3',
            image: './img/Chỉ muốn bên em lúc này.jpg',
            author: 'Huy Vạc, FreakD',
            duration:'3:47'
        },
        {
            name: 'Chỉ vì quá thương em',
            path: './Music/ChiViQuaThuongEmLofiVersion-HaiNamFreakD-6861154.mp3',
            image: './img/chỉ vì quá thương em.jpg',
            author: 'Hải Nam, FreakD',
            duration:'5:12'
        },
        {
            name: 'Chúng ta sau này',
            path: './Music/ChungTaSauNayLofiVer-TRIFreakD-6953708.mp3',
            image: './img/Chúng ta sau này.jpg',
            author: 'TRI, FreakD',
            duration:'2:43'
        },
        {
            name: 'Đừng xem ai đó là cả thế giới',
            path: './Music/DungXemAiDoLaCaTheGioiLofiVersion-ReddyHuuDuy-6281321.mp3',
            image: './img/đừng xem ai đó là cả thế giới.jpg',
            author: 'Reddy',
            duration:'4:16'
        },
        {
            name: 'Đường tôi chở em về',
            path: './Music/DuongToiChoEmVeLofiVersion-buitruonglinhFreakD-7025960_hq.mp3',
            image: './img/2.png',
            author: 'Bùi Trường Linh, FreakD',
            duration:'4:38'
        },
        {
            name: 'Hẹn Yêu',
            path: './Music/HenYeuLofiVersion-DuyZunoCaoTri-6879088.mp3',
            image: './img/hẹn yêu.jpg',
            author: 'Duy Zuno',
            duration:'3:50'
        },
        {
            name: 'Kẻ điên tin vào tình yêu',
            path: './Music/KeDienTinVaoTinhYeuLofiVersion-LilZpoetFreakD-6861163.mp3',
            image: './img/me.jpg',
            author: 'LilZpoet, FreakD',
            duration:'3:45'
        },
        {
            name: 'Kẻ mộng mơ',
            path: './Music/KeMongMoLofiVer-ReddyFreakD-6929548.mp3',
            image: './img/kẻ mộng mơ.jpg',
            author: 'Reddy, FreakD',
            duration:'5:29'
        },
        {
            name: 'Lạ lùng',
            path: './Music/LaLungLofiVersion-Vu-6181036.mp3',
            image: './img/lạ lùng.jpg',
            author: 'VŨ',
            duration:'4:29'
        },
        {
            name: 'Liệu giờ',
            path: './Music/LieuGioEkidLofiVersion-2TVennVanEkid-6952139.mp3',
            image: './img/liệu giờ.jpg',
            author: '2TVennVanEkid',
            duration:'4:33'
        },
        {
            name: 'Mình anh nơi này',
            path: './Music/MinhAnhNoiNayLofiVersion-NITSingFreakD-7022891.mp3',
            image: './img/me.jpg',
            author: 'NITSing, FreakD',
            duration:'4:37'
        },
        {
            name: 'Những gì anh nói',
            path: './Music/NhungGiAnhNoiLofiVersionByHawys-Bozitt-6946199.mp3',
            image: './img/me.jpg',
            author: 'Bozitt',
            duration:'5:36'
        },
        {
            name: 'Nợ ai đó lời xin lỗi',
            path: './Music/NoAiDoLoiXinLoiLofiVersion-BozittCaoTri-6879092.mp3',
            image: './img/Nợ ai đó lời xin lỗi.jpg',
            author: 'Bozitt, CaoTri',
            duration:'5:46'
        },
        {
            name: 'Nước mắt em lau bằng tình yêu mới',
            path: './Music/NuocMatEmLauBangTinhYeuMoiCM1XLofiRemix-DaLABTocTien-6098438.mp3',
            image: './img/Nước mắt e lau bằng tình yêu mới.jpg',
            author: 'DaLAB, TocTien',
            duration:'4:27'
        },
        {
            name: 'Phận duyên lỡ làng',
            path: './Music/Phận duyên lỡ làng - Phát Huy T4, Trungzg, Kprox.mp3',
            image: './img/phận duyên lỡ làng.jpg',
            author: 'Phát Huy T4, Trungzg, Kprox',
            duration:'3:45'
        },
        {
            name: 'Răng khôn',
            path: './Music/RangKhonLofiVersion-PhiPhuongAnhTheFace-7026147.mp3',
            image: './img/răng khôn.jpg',
            author: 'Phí Phương Anh',
            duration:'3:16'
        },
        {
            name: 'Sài gòn đau lòng quá',
            path: './Music/SaiGonDauLongQuaLofiVersion-HuaKimTuyenSIVAN-7006455.mp3',
            image: './img/sài gonnf đau lòng quá.jpg',
            author: 'HuaKimTuyen, SIVAN',
            duration:'5:15'
        },
        {
            name: 'Sài gòn hôm nay mưa',
            path: './Music/SaiGonHomNayMuaLofiRainVersion-JSOLHoangDuyen-7034696.mp3',
            image: './img/sài gòn hôm nay mưa.jpg',
            author: 'JSOL, HoangDuyen',
            duration:'4:22'
        },
        {
            name: 'Sợ rằng em biết anh còn yêu em',
            path: './Music/SoRangEmBietAnhConYeuEmLofiVersion-JuunDangDungFreakD-6248597_hq.mp3',
            image: './img/sợ rằng em biết anh còn yêu em.jpg',
            author: 'Juun Đăng Dũng, FreakD',
            duration:'4:50'
        },
        {
            name: 'Thì thôi',
            path: './Music/ThiThoiLofiVer-ReddyFreakD-6929545.mp3',
            image: './img/vài giây nữa thôi.jpg',
            author: 'Reddy, FreakD',
            duration:'5:48'
        },
        {
            name: 'Vài giây nữa thôi',
            path: './Music/VaiGiayNuaThoiLofiVer-ReddyFreakD-6929544.mp3',
            image: './img/vài giây nữa thôi.jpg',
            author: 'Reddy, FreakD',
            duration:'4:43'
        },
    ],
    render: function(){
        controls.forEach((btn, index) => {
            var getSongList = getSongLists[index];
            btn.onclick = function(){
                $('.control__btn.active').classList.remove('active');
                this.classList.add('active');
                this.classList.add(index);
                line.style.left = this.offsetLeft + 132 + 'px';
                $('.song.active--song').classList.remove('active--song');
                getSongList.classList.add('active--song');
                trendPage.defineProperties();
            };
        });
        const allSong = this.musics.concat(this.podcasts);
        const musicList = allSong.map((song, index) => {
            return `
            <div class="playList--item ${index === trendPage.currentIndex ? 'activeCurrentSong' : ''}" data-index=${index}>
                <img src="${song.image}" alt="">
                <img class="action-play" src="../images-logo/2.gif" alt="">
                <i class="fa-solid fa-play play--action"></i>
                <div class="playList--item__content">
                    <h3 class="playList--item__name">${song.name}</h3>
                    <p class="playList--item__author">${song.author}</p>
                </div>
                <div class="time">
                <span class="timeleft">00:00</span> /
                <span class="timeright">${song.duration}</span>
                </div>
                <div class="playList--item--option">
                    <i class="fa-solid fa-ellipsis"></i>
                </div>           
            </div>
            `
        });
        getSongLists[0].innerHTML = musicList.join('');
        const list2 = this.podcasts.length;
        const musicList1 = this.podcasts.map((song) => {
            list2 = 0 ? `<div>Hiện chưa có bài hát</div>` : `
            <div class="playList--item">
                <img src=${song.image} alt="">
                <img class="action-play" src="../images-logo/2.gif" alt="">
                <i class="fa-solid fa-play play--action"></i>
                <div class="playList--item__content">
                    <h3 class="playList--item__name">${song.name}</h3>
                    <p class="playList--item__author">${song.author}</p>
                </div>
                <div class="time">${song.duration}</div>
                <div class="playList--item--option">
                    <i class="fa-solid fa-ellipsis"></i>
                </div>      
            </div>
            `
            
        });
        getSongLists[1].innerHTML = musicList1.join('');
        const musicList2 = this.musics.map((song, index) => {
            
            return `
            <div class="playList--item ${index === trendPage.currentIndex ? 'activeCurrentSong' : ''}" data-index=${index}>
                <img src="${song.image}" alt="">
                <img class="action-play" src="../images-logo/2.gif" alt="">
                <i class="fa-solid fa-play play--action"></i>
                <div class="playList--item__content">
                    <h3 class="playList--item__name">${song.name}</h3>
                    <p class="playList--item__author">${song.author}</p>
                </div>
                <div class="time">${song.duration}</div>
                <div class="playList--item--option">
                    <i class="fa-solid fa-ellipsis"></i>
                </div>           
            </div>
            `
        });
        getSongLists[2].innerHTML = musicList2.join('');
        // hành vi click option media
        
        
        
    },
    handle: function(){
        // Play or pause this song
        $('.control--asset').onclick = function(){
                if(trendPage.isPlaying){
                    trendPage.isPlaying = false;
                    audio.pause();
                    $('.pause--icon').classList.add('hide');
                    $('.play--icon').classList.remove('hide');
                    setTimeout(() => {
                        $('.cd__thumb--img').classList.add('cd-pause')
                    }, 500);
                   
                } else {
                    trendPage.isPlaying = true;
                    audio.play();
                    $('.pause--icon').classList.remove('hide');
                    $('.play--icon').classList.add('hide');
                    $('.cd__thumb--img').classList.add('cd--rotate');
                    $('.cd__thumb--img').classList.remove('cd-pause');
                }
        };
        audio.ontimeupdate = function(){
            if(audio.duration) {
                const percentProgress = (audio.currentTime/audio.duration)*100;
                progressPlay.value = percentProgress;
                    $('.activeCurrentSong .timeleft').innerHTML = trendPage.convertTime(audio.currentTime);                
            }
        };
        // khi tua nhạc thì position phát nhạc sẽ thay đổi
        progressPlay.onchange = function(e){
            const seekTime = audio.duration / 100 * e.target.value;
            audio.currentTime = seekTime;
            $('.pause--icon').classList.remove('hide');
            $('.play--icon').classList.add('hide');
            $('.cd__thumb--img').classList.add('cd--rotate');
            $('.cd__thumb--img').classList.remove('cd-pause');
            audio.play();
           
        };
        // Chuyển bài hát kế tiếp hoặc bài trước
        $('.fa-forward-step').onclick = function() {
            trendPage.nextSong();
            $('.cd__thumb--img').classList.remove('cd--rotate');
            $('.cd__thumb--img').classList.remove('cd-pause')
            setTimeout(() => {
                $('.cd__thumb--img').classList.add('cd--rotate');
            }, 200);
            audio.play();
            trendPage.render()
            $('.pause--icon').classList.remove('hide');
            $('.play--icon').classList.add('hide');
            trendPage.scrollActiveSong();
        };
        $('.fa-backward-step').onclick = function(){
            trendPage.preSong();
            $('.cd__thumb--img').classList.remove('cd--rotate');
            $('.cd__thumb--img').classList.remove('cd-pause')
            setTimeout(() => {
                $('.cd__thumb--img').classList.add('cd--rotate');
            }, 200);
            audio.play();
            $('.pause--icon').classList.remove('hide');
            $('.play--icon').classList.add('hide');
            trendPage.render();
            trendPage.scrollActiveSong();

        };
        // Khi hết 1 bài thì tự động chuyển sang bài kế tiếp
        audio.onended = function(){
            trendPage.nextSong();
            $('.cd__thumb--img').classList.remove('cd--rotate');
            setTimeout(() => {
                $('.cd__thumb--img').classList.add('cd--rotate');
            }, 200);
            audio.play();
            trendPage.render();
            trendPage.scrollActiveSong();

        };
        
        // hành vi click on song
        $('.list--render').onclick = function(e){
            if(e.target.closest('.playList--item')){
                trendPage.currentIndex = Number(e.target.closest('.playList--item:not(activeCurrentSong)').dataset.index)
                trendPage.loadCurrentSong();
                $('.cd__thumb--img').classList.remove('cd--rotate');
                $('.cd__thumb--img').classList.remove('cd-pause')
                setTimeout(() => {
                    $('.cd__thumb--img').classList.add('cd--rotate');
                }, 200);
                $('.pause--icon').classList.remove('hide');
                $('.play--icon').classList.add('hide');
                audio.play();
                trendPage.render();
                trendPage.scrollActiveSong();
            }
            
        }
    },
    convertTime: function (time) {
        var mins = Math.floor(time / 60);
        var secs = Math.floor(time % 60);
        if (mins < 10) {
            mins = '0' + mins;
        }
        if (secs < 10) {
            secs = '0' + secs;
        }
        return `${mins}:${secs}`;
    },
    defineProperties: function(){
        const set = Number($('.control__btn.active').dataset.index);
        switch(set){
            case 0: Object.defineProperty(this,'currentSong', {
                get: function(){
                        const allSong = this.musics.concat(this.podcasts);
                        return allSong[trendPage.currentIndex]
                    }               
                })
                break; 
            case 1:   Object.defineProperty(this,'currentSong', {
                get: function(){
                        return trendPage.podcasts[trendPage.currentIndex]
                    }               
                })
                break;
            case 2: Object.defineProperty(this,'currentSong', {
                get: function(){
                        return trendPage.musics[trendPage.currentIndex]
                    }               
                }) 
        }

       
        
    },
    loadCurrentSong: function(){
        audio.src = this.currentSong.path;
    },
    nextSong: function(){
        const set = Number($('.control__btn.active').dataset.index);
        const allSong = this.musics.concat(this.podcasts);
        switch(set){
            case 0: trendPage.currentIndex++;
                    if(trendPage.currentIndex > allSong.length) {
                    trendPage.currentIndex = 0;   
            } this.loadCurrentSong(); 
            break;
            case 1: trendPage.currentIndex++;
                    if(trendPage.currentIndex > this.podcasts.length) {
                    trendPage.currentIndex = 0;   
            }  this.loadCurrentSong(); 
            break;
            case 2: trendPage.currentIndex++;
                    if(trendPage.currentIndex > this.musics.length) {
                    trendPage.currentIndex = 0;   
            } ;
            this.loadCurrentSong(); 
            
        }                     
    },
    preSong: function(){
        const set = Number($('.control__btn.active').dataset.index);
        const allSong = this.musics.concat(this.podcasts);
        switch(set){
            case 0: --trendPage.currentIndex;
                    if(trendPage.currentIndex < 0) {
                    trendPage.currentIndex = allSong.length - 1;
            }
            trendPage.loadCurrentSong();
            break;
            case 1: --trendPage.currentIndex;
                    if(trendPage.currentIndex < 0) {
                    trendPage.currentIndex = trendPage.podcasts.length - 1;
            }
            trendPage.loadCurrentSong();
            break;
            case 2: --trendPage.currentIndex;
            if(trendPage.currentIndex < 0) {
            trendPage.currentIndex = trendPage.musics.length - 1;
            }
            trendPage.loadCurrentSong();
        }
    },
    repeat: function(){
        trendPage.currentIndex = trendPage.currentIndex;
        trendPage.loadCurrentSong();
    },
    scrollActiveSong: function(){
        const theSongPlay = $('.activeCurrentSong')
        setTimeout(() => {
            theSongPlay.scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            })
        },300)
        
    },
    start: function(){
        this.render();
        this.defineProperties();
        this.handle();
        this.loadCurrentSong();
    }
}
trendPage.start();