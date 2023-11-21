/**
     * webrtc://domain/AppName/StreamName_转码模板名?txSecret=Md5(key+StreamName_转码模板名+hex(time))&txTime=hex(time)
        http://domain/AppName/StreamName_转码模板名.flv?txSecret=Md5(key+StreamName_转码模板名+hex(time))&txTime=hex(time)
        rtmp://domain/AppName/StreamName_转码模板名?txSecret=Md5(key+StreamName_转码模板名+hex(time))&txTime=hex(time)
        http://domain/AppName/StreamName_转码模板名.m3u8?txSecret=Md5(key+StreamName_转码模板名+hex(time))&txTime=hex(time)
     */

/**
 * https://cloud.tencent.com/document/product/267/32463#.E9.85.8D.E7.BD.AE.E6.A1.88.E4.BE.8B
 * txSecret = MD5(key+StreamName+txTime)
 * d17f0511f43e89d445a63803ceffdef1+test+65676000
 */

// player?.src('http://185848.push.tlivecloud.com/live/test.flv?txSecret=9080DC10AD7EA4C13784BB4B320FBA2B&txTime=65676000'); // url 播放地址
// player?.src('http://www.cricket.cab/live/test.flv?txSecret=8b6c9979baf2ed8251edfb2116b5c1bf&txTime=6567246E'); // url 播放地址
// player?.src('http://www.cricket.cab.txlivecdn.com./live/test.flv?txSecret=8b6c9979baf2ed8251edfb2116b5c1bf&txTime=6567246E'); // url 播放地址
