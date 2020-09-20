const moviesMock = [
    {
        id: "64c69146-99bc-4522-8fb8-57855ec3e797",
        title: "Kidnapped",
        year: 2010,
        cover: "http://dummyimage.com/144x238.bmp/5fa2dd/ffffff",
        description:
            "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
        duration: 1911,
        contentRating: null,
        source:
            "http://51.la/vulputate.aspx?amet=primis&turpis=in&elementum=faucibus&ligula=orci&vehicula=luctus&consequat=et&morbi=ultrices&a=posuere&ipsum=cubilia&integer=curae&a=duis&nibh=faucibus&in=accumsan&quis=odio&justo=curabitur&maecenas=convallis&rhoncus=duis&aliquam=consequat&lacus=dui&morbi=nec&quis=nisi&tortor=volutpat&id=eleifend&nulla=donec&ultrices=ut&aliquet=dolor&maecenas=morbi&leo=vel&odio=lectus&condimentum=in&id=quam&luctus=fringilla&nec=rhoncus&molestie=mauris&sed=enim&justo=leo&pellentesque=rhoncus&viverra=sed&pede=vestibulum&ac=sit&diam=amet&cras=cursus&pellentesque=id&volutpat=turpis&dui=integer&maecenas=aliquet&tristique=massa&est=id&et=lobortis&tempus=convallis&semper=tortor&est=risus&quam=dapibus&pharetra=augue&magna=vel&ac=accumsan&consequat=tellus",
        tags: "Adventure|Children|Drama"
    },
    {
        id: "00c70946-80ca-4923-9915-8e77f720c90d",
        title: "Becky Sharp",
        year: 2004,
        cover: "http://dummyimage.com/199x101.png/5fa2dd/ffffff",
        description:
            "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.",
        duration: 1936,
        contentRating: null,
        source:
            "https://vinaora.com/morbi/odio/odio.png?magnis=rhoncus&dis=dui&parturient=vel&montes=sem&nascetur=sed&ridiculus=sagittis&mus=nam&etiam=congue&vel=risus&augue=semper&vestibulum=porta&rutrum=volutpat&rutrum=quam&neque=pede&aenean=lobortis&auctor=ligula&gravida=sit&sem=amet&praesent=eleifend&id=pede&massa=libero&id=quis&nisl=orci&venenatis=nullam&lacinia=molestie&aenean=nibh&sit=in&amet=lectus&justo=pellentesque&morbi=at&ut=nulla&odio=suspendisse&cras=potenti&mi=cras&pede=in&malesuada=purus&in=eu&imperdiet=magna&et=vulputate&commodo=luctus&vulputate=cum&justo=sociis&in=natoque&blandit=penatibus&ultrices=et&enim=magnis&lorem=dis&ipsum=parturient&dolor=montes&sit=nascetur&amet=ridiculus&consectetuer=mus&adipiscing=vivamus&elit=vestibulum&proin=sagittis",
        tags: "Drama|Romance|War"
    },
    {
        id: "69022e62-d2ee-4cb0-af7a-842f954c9bf8",
        title: "Loaded",
        year: 2001,
        cover: "http://dummyimage.com/220x241.bmp/5fa2dd/ffffff",
        description:
            "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.",
        duration: 1982,
        contentRating: null,
        source:
            "http://vkontakte.ru/ligula/nec.png?morbi=placerat&sem=praesent&mauris=blandit&laoreet=nam&ut=nulla&rhoncus=integer&aliquet=pede&pulvinar=justo&sed=lacinia&nisl=eget&nunc=tincidunt&rhoncus=eget&dui=tempus&vel=vel&sem=pede&sed=morbi&sagittis=porttitor&nam=lorem&congue=id&risus=ligula&semper=suspendisse&porta=ornare&volutpat=consequat&quam=lectus&pede=in&lobortis=est&ligula=risus&sit=auctor&amet=sed&eleifend=tristique&pede=in&libero=tempus&quis=sit&orci=amet&nullam=sem&molestie=fusce&nibh=consequat&in=nulla&lectus=nisl&pellentesque=nunc&at=nisl&nulla=duis&suspendisse=bibendum&potenti=felis&cras=sed&in=interdum&purus=venenatis&eu=turpis&magna=enim&vulputate=blandit&luctus=mi",
        tags: "Action|Crime|Drama|Thriller"
    },
    {
        id: "030c356a-c7fa-474f-8a3b-e10cacbe1632",
        title: "Black Widow",
        year: 1994,
        cover: "http://dummyimage.com/183x128.png/dddddd/000000",
        description:
            "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
        duration: 1904,
        contentRating: null,
        source:
            "https://trellian.com/nunc/purus/phasellus/in/felis/donec.js?pede=eu&morbi=magna&porttitor=vulputate&lorem=luctus&id=cum&ligula=sociis&suspendisse=natoque&ornare=penatibus&consequat=et&lectus=magnis&in=dis&est=parturient&risus=montes&auctor=nascetur&sed=ridiculus&tristique=mus&in=vivamus",
        tags: "Crime|Drama|Mystery|Thriller"
    },
    {
        id: "5279b745-5f66-4547-8756-e7ff00f4f769",
        title:
            "Where Is the Friend's Home? (Where Is My Friend's House?) (Khane-ye doust kodjast?)",
        year: 1987,
        cover: "http://dummyimage.com/233x141.jpg/dddddd/000000",
        description:
            "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
        duration: 1939,
        contentRating: null,
        source:
            "https://quantcast.com/id/nisl/venenatis.png?suspendisse=at&accumsan=turpis&tortor=a&quis=pede&turpis=posuere&sed=nonummy&ante=integer&vivamus=non&tortor=velit&duis=donec&mattis=diam&egestas=neque&metus=vestibulum&aenean=eget&fermentum=vulputate&donec=ut&ut=ultrices&mauris=vel&eget=augue&massa=vestibulum&tempor=ante&convallis=ipsum&nulla=primis&neque=in&libero=faucibus&convallis=orci&eget=luctus&eleifend=et&luctus=ultrices&ultricies=posuere&eu=cubilia&nibh=curae&quisque=donec&id=pharetra&justo=magna&sit=vestibulum&amet=aliquet&sapien=ultrices&dignissim=erat&vestibulum=tortor&vestibulum=sollicitudin&ante=mi&ipsum=sit",
        tags: "Drama"
    },
    {
        id: "c0f666f5-4c23-4c96-a498-f9dac0507e5b",
        title: "Magnum Force",
        year: 1990,
        cover: "http://dummyimage.com/132x152.jpg/ff4444/ffffff",
        description:
            "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.",
        duration: 1939,
        contentRating: null,
        source:
            "http://symantec.com/vel/nulla.xml?ligula=praesent&vehicula=blandit&consequat=nam&morbi=nulla&a=integer&ipsum=pede&integer=justo&a=lacinia&nibh=eget&in=tincidunt&quis=eget&justo=tempus&maecenas=vel&rhoncus=pede&aliquam=morbi&lacus=porttitor&morbi=lorem&quis=id&tortor=ligula&id=suspendisse&nulla=ornare&ultrices=consequat&aliquet=lectus&maecenas=in&leo=est&odio=risus&condimentum=auctor&id=sed&luctus=tristique&nec=in&molestie=tempus&sed=sit&justo=amet&pellentesque=sem&viverra=fusce&pede=consequat&ac=nulla&diam=nisl&cras=nunc&pellentesque=nisl&volutpat=duis&dui=bibendum&maecenas=felis&tristique=sed&est=interdum&et=venenatis&tempus=turpis&semper=enim&est=blandit&quam=mi&pharetra=in&magna=porttitor&ac=pede&consequat=justo&metus=eu&sapien=massa&ut=donec&nunc=dapibus&vestibulum=duis&ante=at&ipsum=velit&primis=eu&in=est&faucibus=congue&orci=elementum&luctus=in&et=hac&ultrices=habitasse&posuere=platea&cubilia=dictumst&curae=morbi&mauris=vestibulum&viverra=velit&diam=id&vitae=pretium&quam=iaculis&suspendisse=diam",
        tags: "Action|Crime|Drama|Thriller"
    },
    {
        id: "31e02ed9-90e2-47c0-9599-e882d20d555c",
        title: "Cheech & Chong's Next Movie",
        year: 2012,
        cover: "http://dummyimage.com/103x216.png/ff4444/ffffff",
        description:
            "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.",
        duration: 1934,
        contentRating: null,
        source:
            "http://google.ru/felis/donec/semper.jsp?libero=in&nullam=congue&sit=etiam&amet=justo&turpis=etiam&elementum=pretium&ligula=iaculis&vehicula=justo&consequat=in&morbi=hac&a=habitasse&ipsum=platea&integer=dictumst&a=etiam&nibh=faucibus&in=cursus&quis=urna&justo=ut&maecenas=tellus&rhoncus=nulla&aliquam=ut&lacus=erat&morbi=id&quis=mauris&tortor=vulputate&id=elementum&nulla=nullam&ultrices=varius&aliquet=nulla&maecenas=facilisi&leo=cras&odio=non&condimentum=velit&id=nec&luctus=nisi&nec=vulputate&molestie=nonummy&sed=maecenas&justo=tincidunt&pellentesque=lacus&viverra=at&pede=velit&ac=vivamus&diam=vel&cras=nulla&pellentesque=eget&volutpat=eros&dui=elementum&maecenas=pellentesque&tristique=quisque&est=porta&et=volutpat&tempus=erat&semper=quisque&est=erat&quam=eros&pharetra=viverra&magna=eget&ac=congue&consequat=eget&metus=semper&sapien=rutrum&ut=nulla&nunc=nunc&vestibulum=purus&ante=phasellus&ipsum=in&primis=felis",
        tags: "Comedy"
    },
    {
        id: "09e30126-6322-49a6-afb4-725b192d54fb",
        title: "Werewolves on Wheels",
        year: 1995,
        cover: "http://dummyimage.com/138x194.jpg/cc0000/ffffff",
        description:
            "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.",
        duration: 1999,
        contentRating: null,
        source:
            "https://wufoo.com/eget.jpg?ultrices=hac&erat=habitasse&tortor=platea&sollicitudin=dictumst&mi=etiam&sit=faucibus&amet=cursus&lobortis=urna&sapien=ut&sapien=tellus&non=nulla&mi=ut&integer=erat&ac=id&neque=mauris&duis=vulputate",
        tags: "Horror"
    },
    {
        id: "72e272b6-4581-4a3b-97ea-10707ced7786",
        title: "Motel, The",
        year: 1988,
        cover: "http://dummyimage.com/176x201.png/cc0000/ffffff",
        description:
            "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
        duration: 1895,
        contentRating: null,
        source:
            "http://yelp.com/donec/semper.js?odio=ante&elementum=vel&eu=ipsum&interdum=praesent&eu=blandit&tincidunt=lacinia&in=erat&leo=vestibulum&maecenas=sed&pulvinar=magna&lobortis=at&est=nunc&phasellus=commodo&sit=placerat&amet=praesent&erat=blandit&nulla=nam&tempus=nulla&vivamus=integer&in=pede&felis=justo&eu=lacinia&sapien=eget&cursus=tincidunt&vestibulum=eget&proin=tempus&eu=vel&mi=pede&nulla=morbi&ac=porttitor&enim=lorem&in=id&tempor=ligula&turpis=suspendisse&nec=ornare&euismod=consequat&scelerisque=lectus&quam=in&turpis=est&adipiscing=risus&lorem=auctor&vitae=sed&mattis=tristique&nibh=in&ligula=tempus&nec=sit&sem=amet&duis=sem&aliquam=fusce&convallis=consequat&nunc=nulla&proin=nisl&at=nunc&turpis=nisl&a=duis&pede=bibendum&posuere=felis&nonummy=sed&integer=interdum&non=venenatis&velit=turpis&donec=enim&diam=blandit&neque=mi&vestibulum=in&eget=porttitor&vulputate=pede&ut=justo&ultrices=eu&vel=massa&augue=donec&vestibulum=dapibus&ante=duis&ipsum=at&primis=velit&in=eu&faucibus=est&orci=congue&luctus=elementum&et=in&ultrices=hac&posuere=habitasse&cubilia=platea&curae=dictumst&donec=morbi&pharetra=vestibulum&magna=velit&vestibulum=id&aliquet=pretium&ultrices=iaculis&erat=diam&tortor=erat&sollicitudin=fermentum&mi=justo&sit=nec",
        tags: "Comedy|Drama"
    },
    {
        id: "f59628c1-1862-4ceb-9a41-86e5e649df04",
        title: "How High",
        year: 2009,
        cover: "http://dummyimage.com/169x148.png/5fa2dd/ffffff",
        description:
            "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.",
        duration: 1985,
        contentRating: null,
        source:
            "http://prnewswire.com/placerat/ante/nulla.jsp?praesent=nisl&lectus=ut&vestibulum=volutpat&quam=sapien&sapien=arcu&varius=sed&ut=augue&blandit=aliquam&non=erat&interdum=volutpat&in=in&ante=congue&vestibulum=etiam",
        tags: "Comedy"
    },
    {
        id: "9020d889-e370-4f74-a18a-6c1cd7878c44",
        title: "Day the Fish Came Out, The",
        year: 2008,
        cover: "http://dummyimage.com/216x198.png/dddddd/000000",
        description:
            "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.",
        duration: 1896,
        contentRating: null,
        source:
            "https://census.gov/augue/aliquam/erat.jsp?pede=vel&justo=lectus&eu=in&massa=quam&donec=fringilla",
        tags: "Comedy|Sci-Fi"
    },
    {
        id: "a9346fcc-c062-4a18-b26d-cb003e64a3be",
        title: "Friends & Lovers",
        year: 2010,
        cover: "http://dummyimage.com/246x102.bmp/dddddd/000000",
        description:
            "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
        duration: 2035,
        contentRating: null,
        source:
            "https://myspace.com/sem/sed/sagittis/nam/congue.png?primis=justo&in=lacinia&faucibus=eget&orci=tincidunt&luctus=eget&et=tempus&ultrices=vel&posuere=pede&cubilia=morbi&curae=porttitor",
        tags: "Comedy|Drama|Romance"
    },
    {
        id: "13581df6-8dd6-4115-84eb-88682c29fc63",
        title: "Cookie's Fortune",
        year: 1999,
        cover: "http://dummyimage.com/111x175.bmp/5fa2dd/ffffff",
        description:
            "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
        duration: 1985,
        contentRating: null,
        source:
            "https://guardian.co.uk/aliquam/augue/quam/sollicitudin.html?lobortis=blandit&sapien=nam&sapien=nulla&non=integer&mi=pede&integer=justo&ac=lacinia&neque=eget&duis=tincidunt&bibendum=eget&morbi=tempus&non=vel&quam=pede&nec=morbi&dui=porttitor&luctus=lorem&rutrum=id&nulla=ligula&tellus=suspendisse&in=ornare&sagittis=consequat&dui=lectus",
        tags: "Comedy|Drama"
    },
    {
        id: "47aa6a9b-a25a-4401-b8a6-6196e2b06638",
        title: "Courage of the Eagles, The (Les aiguilles rouges)",
        year: 2008,
        cover: "http://dummyimage.com/212x133.png/ff4444/ffffff",
        description:
            "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.",
        duration: 2026,
        contentRating: null,
        source:
            "https://wunderground.com/a/feugiat/et/eros/vestibulum.json?aliquet=placerat&pulvinar=praesent&sed=blandit&nisl=nam&nunc=nulla&rhoncus=integer&dui=pede&vel=justo&sem=lacinia&sed=eget&sagittis=tincidunt&nam=eget&congue=tempus&risus=vel&semper=pede&porta=morbi&volutpat=porttitor&quam=lorem&pede=id&lobortis=ligula&ligula=suspendisse&sit=ornare&amet=consequat&eleifend=lectus&pede=in&libero=est&quis=risus&orci=auctor&nullam=sed&molestie=tristique&nibh=in&in=tempus&lectus=sit&pellentesque=amet&at=sem&nulla=fusce&suspendisse=consequat&potenti=nulla&cras=nisl&in=nunc&purus=nisl&eu=duis&magna=bibendum&vulputate=felis&luctus=sed&cum=interdum&sociis=venenatis&natoque=turpis&penatibus=enim&et=blandit&magnis=mi&dis=in&parturient=porttitor&montes=pede&nascetur=justo&ridiculus=eu&mus=massa&vivamus=donec&vestibulum=dapibus&sagittis=duis&sapien=at&cum=velit&sociis=eu&natoque=est&penatibus=congue&et=elementum&magnis=in&dis=hac&parturient=habitasse&montes=platea&nascetur=dictumst&ridiculus=morbi&mus=vestibulum&etiam=velit&vel=id&augue=pretium&vestibulum=iaculis&rutrum=diam&rutrum=erat&neque=fermentum&aenean=justo&auctor=nec&gravida=condimentum&sem=neque&praesent=sapien&id=placerat&massa=ante&id=nulla&nisl=justo&venenatis=aliquam&lacinia=quis&aenean=turpis",
        tags: "Drama"
    },
    {
        id: "33943fd9-a6eb-4bf9-82ae-2c7686968b58",
        title: "Je, tu, il, elle (I, You, He, She)",
        year: 2007,
        cover: "http://dummyimage.com/170x112.jpg/cc0000/ffffff",
        description:
            "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.",
        duration: 1932,
        contentRating: null,
        source:
            "http://ehow.com/nec/condimentum/neque/sapien/placerat/ante.aspx?at=vivamus&nunc=vestibulum&commodo=sagittis&placerat=sapien&praesent=cum&blandit=sociis",
        tags: "Drama"
    },
    {
        id: "82703d83-9c97-4c5d-b0a6-48283d7e8d76",
        title: "Hatchet III",
        year: 1997,
        cover: "http://dummyimage.com/214x127.bmp/5fa2dd/ffffff",
        description:
            "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",
        duration: 2042,
        contentRating: null,
        source:
            "https://furl.net/purus/sit/amet/nulla/quisque/arcu/libero.aspx?ut=elit&massa=proin&quis=interdum&augue=mauris&luctus=non&tincidunt=ligula&nulla=pellentesque&mollis=ultrices&molestie=phasellus&lorem=id&quisque=sapien&ut=in&erat=sapien&curabitur=iaculis&gravida=congue&nisi=vivamus&at=metus&nibh=arcu&in=adipiscing&hac=molestie&habitasse=hendrerit&platea=at&dictumst=vulputate&aliquam=vitae&augue=nisl&quam=aenean&sollicitudin=lectus&vitae=pellentesque&consectetuer=eget&eget=nunc&rutrum=donec&at=quis&lorem=orci&integer=eget&tincidunt=orci&ante=vehicula&vel=condimentum&ipsum=curabitur&praesent=in&blandit=libero&lacinia=ut&erat=massa&vestibulum=volutpat&sed=convallis&magna=morbi&at=odio&nunc=odio&commodo=elementum&placerat=eu&praesent=interdum&blandit=eu&nam=tincidunt&nulla=in&integer=leo&pede=maecenas&justo=pulvinar&lacinia=lobortis&eget=est&tincidunt=phasellus&eget=sit&tempus=amet&vel=erat&pede=nulla&morbi=tempus&porttitor=vivamus&lorem=in&id=felis&ligula=eu&suspendisse=sapien&ornare=cursus&consequat=vestibulum&lectus=proin&in=eu&est=mi&risus=nulla&auctor=ac&sed=enim&tristique=in&in=tempor",
        tags: "Comedy|Horror"
    },
    {
        id: "087305ab-5f5d-43e1-b1f2-5cf2d096bcc5",
        title: "Lady in Red, The",
        year: 2000,
        cover: "http://dummyimage.com/185x166.bmp/dddddd/000000",
        description:
            "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
        duration: 2035,
        contentRating: null,
        source:
            "https://youtu.be/luctus.json?blandit=potenti&non=cras&interdum=in&in=purus&ante=eu&vestibulum=magna&ante=vulputate&ipsum=luctus&primis=cum&in=sociis&faucibus=natoque&orci=penatibus&luctus=et&et=magnis&ultrices=dis&posuere=parturient&cubilia=montes&curae=nascetur&duis=ridiculus&faucibus=mus&accumsan=vivamus&odio=vestibulum&curabitur=sagittis&convallis=sapien&duis=cum&consequat=sociis&dui=natoque&nec=penatibus&nisi=et&volutpat=magnis&eleifend=dis&donec=parturient&ut=montes&dolor=nascetur&morbi=ridiculus&vel=mus&lectus=etiam&in=vel&quam=augue&fringilla=vestibulum&rhoncus=rutrum&mauris=rutrum&enim=neque&leo=aenean&rhoncus=auctor&sed=gravida&vestibulum=sem&sit=praesent&amet=id&cursus=massa&id=id&turpis=nisl&integer=venenatis&aliquet=lacinia&massa=aenean&id=sit&lobortis=amet&convallis=justo&tortor=morbi&risus=ut&dapibus=odio&augue=cras&vel=mi&accumsan=pede&tellus=malesuada&nisi=in&eu=imperdiet&orci=et&mauris=commodo&lacinia=vulputate&sapien=justo&quis=in&libero=blandit&nullam=ultrices&sit=enim&amet=lorem&turpis=ipsum&elementum=dolor&ligula=sit&vehicula=amet&consequat=consectetuer&morbi=adipiscing&a=elit&ipsum=proin&integer=interdum&a=mauris&nibh=non",
        tags: "Action"
    },
    {
        id: "7358c443-dc02-4fd6-9c7e-fe40b55cc1a9",
        title: "State Witness, The (Swiadek koronny)",
        year: 1999,
        cover: "http://dummyimage.com/108x118.png/ff4444/ffffff",
        description:
            "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.",
        duration: 2011,
        contentRating: null,
        source:
            "http://geocities.com/tincidunt/nulla/mollis.html?sapien=vel&non=lectus&mi=in&integer=quam&ac=fringilla&neque=rhoncus&duis=mauris&bibendum=enim&morbi=leo&non=rhoncus&quam=sed&nec=vestibulum&dui=sit&luctus=amet&rutrum=cursus&nulla=id&tellus=turpis&in=integer&sagittis=aliquet&dui=massa&vel=id&nisl=lobortis&duis=convallis&ac=tortor&nibh=risus&fusce=dapibus&lacus=augue&purus=vel&aliquet=accumsan&at=tellus&feugiat=nisi&non=eu&pretium=orci&quis=mauris&lectus=lacinia&suspendisse=sapien&potenti=quis&in=libero&eleifend=nullam&quam=sit",
        tags: "Action|Crime|Drama"
    },
    {
        id: "edcda4eb-ff9b-410a-bb45-f06f9639db23",
        title: "Long Goodbye, The",
        year: 1996,
        cover: "http://dummyimage.com/120x111.bmp/ff4444/ffffff",
        description:
            "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.",
        duration: 1946,
        contentRating: null,
        source:
            "http://naver.com/vitae/quam/suspendisse/potenti/nullam/porttitor.jsp?vitae=vitae&ipsum=ipsum&aliquam=aliquam&non=non&mauris=mauris&morbi=morbi&non=non&lectus=lectus&aliquam=aliquam&sit=sit&amet=amet&diam=diam&in=in&magna=magna&bibendum=bibendum&imperdiet=imperdiet&nullam=nullam&orci=orci&pede=pede&venenatis=venenatis&non=non&sodales=sodales&sed=sed&tincidunt=tincidunt&eu=eu&felis=felis&fusce=fusce&posuere=posuere&felis=felis&sed=sed&lacus=lacus&morbi=morbi&sem=sem&mauris=mauris&laoreet=laoreet&ut=ut&rhoncus=rhoncus&aliquet=aliquet",
        tags: "Crime|Film-Noir"
    },
    {
        id: "47a2e039-4dcc-4be5-a659-77ef27cde6f0",
        title:
            "180° South (180 Degrees South) (180° South: Conquerors of the Useless)",
        year: 2007,
        cover: "http://dummyimage.com/196x233.png/dddddd/000000",
        description:
            "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.",
        duration: 1928,
        contentRating: null,
        source:
            "https://sciencedaily.com/vestibulum/ante/ipsum/primis/in/faucibus.jsp?feugiat=libero&non=convallis&pretium=eget&quis=eleifend&lectus=luctus&suspendisse=ultricies&potenti=eu&in=nibh&eleifend=quisque&quam=id&a=justo&odio=sit&in=amet&hac=sapien&habitasse=dignissim&platea=vestibulum&dictumst=vestibulum&maecenas=ante&ut=ipsum&massa=primis&quis=in&augue=faucibus&luctus=orci&tincidunt=luctus&nulla=et&mollis=ultrices&molestie=posuere&lorem=cubilia&quisque=curae&ut=nulla&erat=dapibus&curabitur=dolor&gravida=vel&nisi=est&at=donec&nibh=odio&in=justo&hac=sollicitudin&habitasse=ut&platea=suscipit&dictumst=a&aliquam=feugiat&augue=et&quam=eros&sollicitudin=vestibulum&vitae=ac&consectetuer=est&eget=lacinia&rutrum=nisi&at=venenatis&lorem=tristique&integer=fusce&tincidunt=congue",
        tags: "Documentary|Drama"
    },
    {
        id: "8e65b8f7-234d-439e-b749-349b1457a595",
        title: "Viy or Spirit of Evil (Viy)",
        year: 2012,
        cover: "http://dummyimage.com/179x240.jpg/cc0000/ffffff",
        description: "In congue. Etiam justo. Etiam pretium iaculis justo.",
        duration: 1966,
        contentRating: null,
        source:
            "http://apache.org/nunc/nisl/duis/bibendum.js?vehicula=faucibus&condimentum=orci&curabitur=luctus&in=et&libero=ultrices&ut=posuere&massa=cubilia&volutpat=curae&convallis=mauris&morbi=viverra&odio=diam&odio=vitae&elementum=quam&eu=suspendisse&interdum=potenti&eu=nullam&tincidunt=porttitor",
        tags: "Comedy|Drama|Fantasy|Horror"
    },
    {
        id: "1bc01b80-bc7a-4417-b2ac-d5ec62abf316",
        title: "Bribe, The",
        year: 2006,
        cover: "http://dummyimage.com/101x110.bmp/5fa2dd/ffffff",
        description:
            "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.",
        duration: 2035,
        contentRating: null,
        source:
            "https://uiuc.edu/felis/eu/sapien/cursus/vestibulum/proin.aspx?volutpat=in&dui=hac&maecenas=habitasse&tristique=platea&est=dictumst&et=etiam&tempus=faucibus&semper=cursus&est=urna&quam=ut&pharetra=tellus&magna=nulla&ac=ut&consequat=erat&metus=id&sapien=mauris&ut=vulputate&nunc=elementum&vestibulum=nullam&ante=varius&ipsum=nulla&primis=facilisi&in=cras&faucibus=non&orci=velit&luctus=nec&et=nisi&ultrices=vulputate&posuere=nonummy&cubilia=maecenas&curae=tincidunt&mauris=lacus&viverra=at&diam=velit&vitae=vivamus&quam=vel&suspendisse=nulla&potenti=eget&nullam=eros&porttitor=elementum&lacus=pellentesque&at=quisque&turpis=porta&donec=volutpat&posuere=erat&metus=quisque&vitae=erat&ipsum=eros&aliquam=viverra&non=eget&mauris=congue&morbi=eget&non=semper&lectus=rutrum&aliquam=nulla&sit=nunc&amet=purus&diam=phasellus&in=in&magna=felis&bibendum=donec&imperdiet=semper&nullam=sapien&orci=a&pede=libero&venenatis=nam&non=dui&sodales=proin&sed=leo&tincidunt=odio&eu=porttitor&felis=id&fusce=consequat&posuere=in&felis=consequat&sed=ut&lacus=nulla&morbi=sed&sem=accumsan&mauris=felis&laoreet=ut&ut=at&rhoncus=dolor&aliquet=quis&pulvinar=odio&sed=consequat&nisl=varius&nunc=integer&rhoncus=ac&dui=leo&vel=pellentesque&sem=ultrices&sed=mattis&sagittis=odio&nam=donec&congue=vitae",
        tags: "Drama|Film-Noir|Thriller"
    },
    {
        id: "99fc7b96-4f91-48d7-8cc1-d9c7b575f304",
        title: "Home Run",
        year: 2011,
        cover: "http://dummyimage.com/242x107.jpg/cc0000/ffffff",
        description:
            "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.",
        duration: 2063,
        contentRating: null,
        source:
            "https://google.it/lacus.jsp?praesent=quis&blandit=orci&nam=nullam&nulla=molestie&integer=nibh&pede=in&justo=lectus&lacinia=pellentesque&eget=at&tincidunt=nulla&eget=suspendisse&tempus=potenti&vel=cras&pede=in&morbi=purus&porttitor=eu&lorem=magna&id=vulputate&ligula=luctus&suspendisse=cum&ornare=sociis&consequat=natoque&lectus=penatibus&in=et&est=magnis&risus=dis&auctor=parturient&sed=montes&tristique=nascetur&in=ridiculus&tempus=mus&sit=vivamus&amet=vestibulum&sem=sagittis&fusce=sapien&consequat=cum&nulla=sociis&nisl=natoque&nunc=penatibus&nisl=et&duis=magnis&bibendum=dis&felis=parturient&sed=montes&interdum=nascetur&venenatis=ridiculus&turpis=mus&enim=etiam&blandit=vel&mi=augue&in=vestibulum&porttitor=rutrum&pede=rutrum&justo=neque&eu=aenean&massa=auctor&donec=gravida&dapibus=sem&duis=praesent&at=id&velit=massa&eu=id&est=nisl&congue=venenatis&elementum=lacinia&in=aenean&hac=sit&habitasse=amet&platea=justo&dictumst=morbi&morbi=ut&vestibulum=odio&velit=cras&id=mi&pretium=pede&iaculis=malesuada&diam=in&erat=imperdiet&fermentum=et&justo=commodo&nec=vulputate&condimentum=justo&neque=in&sapien=blandit&placerat=ultrices&ante=enim&nulla=lorem&justo=ipsum&aliquam=dolor&quis=sit&turpis=amet",
        tags: "Drama"
    },
    {
        id: "c92bc80e-f5c4-4eca-b212-66e6e610d735",
        title: "Headquarters (Päämaja) ",
        year: 1995,
        cover: "http://dummyimage.com/247x162.png/dddddd/000000",
        description:
            "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
        duration: 1988,
        contentRating: null,
        source:
            "http://mediafire.com/erat/nulla/tempus/vivamus/in.aspx?velit=auctor&id=sed&pretium=tristique&iaculis=in&diam=tempus&erat=sit&fermentum=amet&justo=sem&nec=fusce&condimentum=consequat&neque=nulla&sapien=nisl&placerat=nunc&ante=nisl&nulla=duis&justo=bibendum&aliquam=felis&quis=sed&turpis=interdum&eget=venenatis&elit=turpis&sodales=enim&scelerisque=blandit&mauris=mi&sit=in&amet=porttitor&eros=pede&suspendisse=justo&accumsan=eu&tortor=massa&quis=donec&turpis=dapibus&sed=duis&ante=at&vivamus=velit&tortor=eu&duis=est&mattis=congue&egestas=elementum&metus=in&aenean=hac&fermentum=habitasse&donec=platea&ut=dictumst&mauris=morbi&eget=vestibulum",
        tags: "Drama|War"
    },
    {
        id: "09fdca8c-01ba-46e5-9569-9b8713c3ba52",
        title: "Spring",
        year: 1996,
        cover: "http://dummyimage.com/102x139.bmp/dddddd/000000",
        description:
            "Sed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\n\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
        duration: 1958,
        contentRating: null,
        source:
            "http://amazonaws.com/eros/viverra/eget.aspx?lobortis=justo&vel=eu&dapibus=massa&at=donec&diam=dapibus&nam=duis&tristique=at&tortor=velit&eu=eu&pede=est",
        tags: "Horror|Romance|Sci-Fi"
    },
    {
        id: "10711002-9bde-4e52-b123-3a26d0f20bb0",
        title: "Animal",
        year: 2002,
        cover: "http://dummyimage.com/187x173.jpg/cc0000/ffffff",
        description:
            "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.",
        duration: 2023,
        contentRating: null,
        source:
            "https://amazon.co.jp/elementum.xml?a=morbi&nibh=odio&in=odio&quis=elementum&justo=eu&maecenas=interdum&rhoncus=eu&aliquam=tincidunt&lacus=in&morbi=leo&quis=maecenas&tortor=pulvinar&id=lobortis&nulla=est&ultrices=phasellus&aliquet=sit&maecenas=amet&leo=erat&odio=nulla&condimentum=tempus&id=vivamus&luctus=in&nec=felis&molestie=eu&sed=sapien&justo=cursus&pellentesque=vestibulum&viverra=proin&pede=eu&ac=mi&diam=nulla&cras=ac&pellentesque=enim&volutpat=in&dui=tempor&maecenas=turpis&tristique=nec&est=euismod&et=scelerisque&tempus=quam&semper=turpis&est=adipiscing&quam=lorem&pharetra=vitae&magna=mattis&ac=nibh&consequat=ligula&metus=nec&sapien=sem&ut=duis&nunc=aliquam&vestibulum=convallis&ante=nunc&ipsum=proin",
        tags: "Action|Comedy|Romance"
    },
    {
        id: "b6e91690-1b6b-4d8f-95ff-233e396905a4",
        title: "Twin Town",
        year: 1995,
        cover: "http://dummyimage.com/145x178.jpg/ff4444/ffffff",
        description: "Fusce consequat. Nulla nisl. Nunc nisl.",
        duration: 2021,
        contentRating: null,
        source:
            "https://state.gov/dapibus/dolor/vel.png?in=integer&hac=ac&habitasse=neque&platea=duis&dictumst=bibendum&maecenas=morbi&ut=non&massa=quam&quis=nec&augue=dui&luctus=luctus&tincidunt=rutrum&nulla=nulla&mollis=tellus&molestie=in&lorem=sagittis&quisque=dui&ut=vel&erat=nisl&curabitur=duis&gravida=ac&nisi=nibh&at=fusce&nibh=lacus&in=purus&hac=aliquet&habitasse=at&platea=feugiat&dictumst=non&aliquam=pretium&augue=quis&quam=lectus&sollicitudin=suspendisse&vitae=potenti&consectetuer=in&eget=eleifend&rutrum=quam&at=a&lorem=odio&integer=in&tincidunt=hac&ante=habitasse&vel=platea&ipsum=dictumst&praesent=maecenas&blandit=ut&lacinia=massa&erat=quis&vestibulum=augue&sed=luctus&magna=tincidunt&at=nulla&nunc=mollis&commodo=molestie&placerat=lorem&praesent=quisque&blandit=ut&nam=erat&nulla=curabitur&integer=gravida&pede=nisi&justo=at&lacinia=nibh&eget=in&tincidunt=hac&eget=habitasse&tempus=platea&vel=dictumst&pede=aliquam&morbi=augue&porttitor=quam&lorem=sollicitudin&id=vitae&ligula=consectetuer&suspendisse=eget&ornare=rutrum&consequat=at&lectus=lorem&in=integer&est=tincidunt&risus=ante&auctor=vel&sed=ipsum&tristique=praesent",
        tags: "Comedy|Crime"
    },
    {
        id: "317ec8ec-d394-4503-a89c-ffc382344743",
        title: "Skippy",
        year: 1995,
        cover: "http://dummyimage.com/100x168.jpg/5fa2dd/ffffff",
        description:
            "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.",
        duration: 1972,
        contentRating: null,
        source:
            "http://pbs.org/elit/sodales.json?morbi=curabitur&ut=in&odio=libero&cras=ut&mi=massa&pede=volutpat&malesuada=convallis&in=morbi&imperdiet=odio&et=odio&commodo=elementum&vulputate=eu&justo=interdum&in=eu&blandit=tincidunt&ultrices=in&enim=leo&lorem=maecenas&ipsum=pulvinar&dolor=lobortis&sit=est&amet=phasellus&consectetuer=sit&adipiscing=amet&elit=erat&proin=nulla&interdum=tempus&mauris=vivamus&non=in&ligula=felis&pellentesque=eu&ultrices=sapien&phasellus=cursus&id=vestibulum&sapien=proin&in=eu&sapien=mi&iaculis=nulla&congue=ac&vivamus=enim&metus=in&arcu=tempor&adipiscing=turpis&molestie=nec&hendrerit=euismod&at=scelerisque&vulputate=quam&vitae=turpis&nisl=adipiscing&aenean=lorem&lectus=vitae&pellentesque=mattis&eget=nibh&nunc=ligula&donec=nec&quis=sem&orci=duis&eget=aliquam&orci=convallis&vehicula=nunc&condimentum=proin&curabitur=at&in=turpis&libero=a&ut=pede&massa=posuere&volutpat=nonummy&convallis=integer&morbi=non&odio=velit&odio=donec&elementum=diam&eu=neque&interdum=vestibulum&eu=eget&tincidunt=vulputate&in=ut&leo=ultrices&maecenas=vel&pulvinar=augue&lobortis=vestibulum&est=ante&phasellus=ipsum&sit=primis&amet=in&erat=faucibus&nulla=orci&tempus=luctus&vivamus=et&in=ultrices&felis=posuere",
        tags: "Comedy|Drama"
    },
    {
        id: "9df4a8a3-db46-48d1-92cd-5360d641113d",
        title: "Enid Is Sleeping",
        year: 2008,
        cover: "http://dummyimage.com/204x172.png/ff4444/ffffff",
        description:
            "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.\n\nCurabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.",
        duration: 2015,
        contentRating: null,
        source:
            "https://youtu.be/feugiat/non/pretium.jpg?ultricies=nibh&eu=in&nibh=lectus&quisque=pellentesque&id=at&justo=nulla&sit=suspendisse&amet=potenti&sapien=cras&dignissim=in&vestibulum=purus&vestibulum=eu&ante=magna&ipsum=vulputate&primis=luctus&in=cum&faucibus=sociis&orci=natoque&luctus=penatibus&et=et&ultrices=magnis&posuere=dis&cubilia=parturient&curae=montes&nulla=nascetur&dapibus=ridiculus&dolor=mus&vel=vivamus&est=vestibulum&donec=sagittis&odio=sapien&justo=cum&sollicitudin=sociis&ut=natoque&suscipit=penatibus&a=et&feugiat=magnis&et=dis&eros=parturient&vestibulum=montes&ac=nascetur&est=ridiculus&lacinia=mus&nisi=etiam&venenatis=vel&tristique=augue&fusce=vestibulum&congue=rutrum&diam=rutrum&id=neque&ornare=aenean&imperdiet=auctor&sapien=gravida&urna=sem&pretium=praesent&nisl=id&ut=massa&volutpat=id&sapien=nisl&arcu=venenatis&sed=lacinia&augue=aenean&aliquam=sit&erat=amet&volutpat=justo&in=morbi&congue=ut&etiam=odio&justo=cras&etiam=mi&pretium=pede&iaculis=malesuada&justo=in&in=imperdiet&hac=et&habitasse=commodo&platea=vulputate&dictumst=justo&etiam=in&faucibus=blandit&cursus=ultrices&urna=enim&ut=lorem&tellus=ipsum",
        tags: "Comedy"
    },
    {
        id: "9b6273e2-eabd-4cfa-a135-3bea640c5caf",
        title: "Cujo",
        year: 2000,
        cover: "http://dummyimage.com/148x175.bmp/cc0000/ffffff",
        description:
            "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
        duration: 2006,
        contentRating: null,
        source:
            "https://dot.gov/curabitur/at/ipsum/ac.jsp?eu=nulla&orci=eget&mauris=eros&lacinia=elementum&sapien=pellentesque&quis=quisque&libero=porta&nullam=volutpat&sit=erat&amet=quisque&turpis=erat&elementum=eros&ligula=viverra&vehicula=eget&consequat=congue&morbi=eget&a=semper&ipsum=rutrum&integer=nulla&a=nunc&nibh=purus&in=phasellus&quis=in&justo=felis&maecenas=donec&rhoncus=semper&aliquam=sapien&lacus=a&morbi=libero&quis=nam&tortor=dui&id=proin&nulla=leo&ultrices=odio&aliquet=porttitor&maecenas=id&leo=consequat&odio=in&condimentum=consequat&id=ut&luctus=nulla&nec=sed&molestie=accumsan&sed=felis&justo=ut&pellentesque=at&viverra=dolor&pede=quis&ac=odio&diam=consequat&cras=varius&pellentesque=integer&volutpat=ac&dui=leo&maecenas=pellentesque&tristique=ultrices&est=mattis&et=odio&tempus=donec&semper=vitae&est=nisi&quam=nam&pharetra=ultrices&magna=libero&ac=non&consequat=mattis&metus=pulvinar&sapien=nulla&ut=pede&nunc=ullamcorper&vestibulum=augue&ante=a&ipsum=suscipit&primis=nulla&in=elit&faucibus=ac&orci=nulla&luctus=sed&et=vel&ultrices=enim&posuere=sit&cubilia=amet&curae=nunc&mauris=viverra&viverra=dapibus&diam=nulla&vitae=suscipit&quam=ligula&suspendisse=in&potenti=lacus&nullam=curabitur&porttitor=at&lacus=ipsum&at=ac",
        tags: "Horror|Thriller"
    }
];

module.exports = {moviesMock};
