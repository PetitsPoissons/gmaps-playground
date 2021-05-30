let map_url = `url(https://maps.googleapis.com/maps/api/staticmap?center=Brooklyn+Bridge,New+York,NY&scale=2&size=400x240&zoom=10&maptype=roadmap&key=${config.apiKey})`;

const smMain = {
  init: function () {
    console.log('smMain.init');
    $('#divPageMiddle').css('background-image', map_url);
    $('#btnLoadEditor').click(smMain.loadUrlEditor);
    $('#btnLoadMap').click(smMain.loadMap);
  },
  loadUrlEditor: function () {
    console.log('smMain.loadUrlEditor');
    map_url = $('#divPageMiddle').css('background-image');
    console.log('map_url: ' + map_url);
    let html = '<textarea id="txtUrlBuff"></textarea>';
    $('#divPageMiddle').html(html);
    $('#txtUrlBuff').val(map_url);
  },
  loadMap: function () {
    console.log('smMain.loadMap');
    map_url = $('#txtUrlBuff').val();
    console.log('map_url: ' + map_url);
    $('#divPageMiddle').css('background-image', map_url);
    $('#divPageMiddle').html('');
  },
};
