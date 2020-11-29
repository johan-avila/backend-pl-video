const moviesMock = [
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
        tags: ["Documentary", "Drama"]
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
        tags: ["Comedy", "Drama", "Fantasy", "Horror"]
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
        tags: ["Drama", "Film-Noir|Thriller", "Thriller"]
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
        tags: ["Drama"]
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
        tags: ["Drama", "War"]
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
        tags: ["Horror", "Romance", "Sci-Fi"]
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
        tags: ["Action", "Comedy", "Romance"]
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
        tags: ["Comedy", "Crime"]
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
        tags: ["Comedy", "Drama"]
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
        tags: ["Comedy"]
    }
];

function filterMoviesMocks(tag) {
    return moviesMock.filter((movie) => movie.tags.includes(tag));
}

class MoviesServiceMock {
    async getMovies() {
        return Promise.resolve(moviesMock);
    }

    async createMovie() {
        return Promise.resolve(moviesMock[0]);
    }
}

module.exports = {
    moviesMock,
    filterMoviesMocks,
    MoviesServiceMock
};
