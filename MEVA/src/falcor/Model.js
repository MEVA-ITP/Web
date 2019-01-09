import falcor from 'falcor'

const $ref = falcor.Model.ref;

export const model = new falcor.Model({
    cache: {
        status: "authenticated",
        user: $ref(["userById", "5bd5bde05f7cdc448265f8bc"]),
        userById: {
            "5bd5bde05f7cdc448265f8bc": {
                "id": "5bd5bde05f7cdc448265f8bc",
                "email": "dlangheiter@student.tgm.ac.at",
                "phone": "+43650330597",
                "external": false,
                "active": true,
                "permission": "admin"
            }
        },
        devices: {
            length: 20,
            "0": $ref(["devicesById", "5c10c9d69bfced350ccce874"]),
            "1": $ref(["devicesById", "5c10c9d99bfced350ccce875"]),
            "2": $ref(["devicesById", "5c10c9d99bfced350ccce876"]),
            "3": $ref(["devicesById", "5c10c9d99bfced350ccce877"]),
            "4": $ref(["devicesById", "5c10c9d99bfced350ccce878"]),
            "5": $ref(["devicesById", "5c10c9d99bfced350ccce879"]),
            "6": $ref(["devicesById", "5c10c9d99bfced350ccce87a"]),
            "7": $ref(["devicesById", "5c10c9d99bfced350ccce87b"]),
            "8": $ref(["devicesById", "5c10c9d99bfced350ccce87c"]),
            "9": $ref(["devicesById", "5c10c9d99bfced350ccce87d"]),
            "10": $ref(["devicesById", "5c10c9d99bfced350ccce87e"]),
            "11": $ref(["devicesById", "5c10c9d99bfced350ccce87f"]),
            "12": $ref(["devicesById", "5c10c9d99bfced350ccce880"]),
            "13": $ref(["devicesById", "5c10c9d99bfced350ccce881"]),
            "14": $ref(["devicesById", "5c10c9d99bfced350ccce882"]),
            "15": $ref(["devicesById", "5c10c9d99bfced350ccce883"]),
            "16": $ref(["devicesById", "5c10c9d99bfced350ccce884"]),
            "17": $ref(["devicesById", "5c10c9d99bfced350ccce885"]),
            "18": $ref(["devicesById", "5c10c9d99bfced350ccce886"]),
            "19": $ref(["devicesById", "5c10c9d99bfced350ccce887"]),
            "20": $ref(["devicesById", "5c10c9d99bfced350ccce888"])
        },
        devicesById: {
            "5c10c9d69bfced350ccce874": {"id":"5c10c9d69bfced350ccce874","name":"Canon EOS 6D MK2 Body Kamera","serial":"xxx","invnr":"40000 1493584","room":"H130","image":"/public/images/Canon_EOS6DMark2.png,\nCanon_EOS6DMark2_undTasche.png","description":"Des","status":"ok","attributes":{},"tags":{"0":"Kamera"}},
            "5c10c9d99bfced350ccce875": {"id":"5c10c9d99bfced350ccce875","name":"Canon EOS 6D MK2 Body Kamera","serial":"xxx","invnr":"40000 1493563","room":"H130","image":"/public/images/Canon_EOS6DMark2.png,\nCanon_EOS6DMark2_undTasche.png","description":"Des","status":"ok","attributes":{},"tags":{"0":"Kamera"}},
            "5c10c9d99bfced350ccce876": {"id":"5c10c9d99bfced350ccce876","name":"AG-AC90EJC camcorder","serial":"xxx","invnr":"40000 0307643","room":"H130","image":"/public/images/","description":"Des","status":"ok","attributes":{},"tags":{"0":"Kamera"}},
            "5c10c9d99bfced350ccce877": {"id":"5c10c9d99bfced350ccce877","name":"AG-AC90EJC camcorder","serial":"xxx","invnr":"40000 0307645","room":"H130","image":"/public/images/","description":"Des","status":"ok","attributes":{},"tags":{"0":"Kamera"}},
            "5c10c9d99bfced350ccce878": {"id":"5c10c9d99bfced350ccce878","name":"ARRILITE 750 Plus 3er Set im Rollkoffer","serial":"xxx","invnr":"40000 0307280","room":"H130","image":"/public/images/ARRLite750+.png","description":"Des","status":"ok","attributes":{},"tags":{"0":"Sonstiges"}},
            "5c10c9d99bfced350ccce879": {"id":"5c10c9d99bfced350ccce879","name":"ARRILITE 750 Plus 3er Set im Rollkoffer","serial":"xxx","invnr":"40000 0307283","room":"H130","image":"/public/images/ARRLite750+.png","description":"Des","status":"ok","attributes":{},"tags":{"0":"Sonstiges"}},
            "5c10c9d99bfced350ccce87a": {"id":"5c10c9d99bfced350ccce87a","name":"Canon Kamera EOS 5D","serial":"xxx","invnr":"312002811424","room":"H130","image":"/public/images/","description":"Des","status":"ok","attributes":{},"tags":{"0":"Kamera"}},
            "5c10c9d99bfced350ccce87b": {"id":"5c10c9d99bfced350ccce87b","name":"Digipro F2 Belichtungsmesser","serial":"xxx","invnr":"40000 0269958","room":"H130","image":"/public/images/","description":"Des","status":"ok","attributes":{},"tags":{"0":"Sonstiges"}},
            "5c10c9d99bfced350ccce87c": {"id":"5c10c9d99bfced350ccce87c","name":"Canon EOs 5D Mark3 (SLR) mit Objektiv EF 24-105","serial":"xxx","invnr":"40000 0291672","room":"H130","image":"/public/images/Canon_EOS5DMark3.png,\nCanon_EOS5DMark3_undTasche.png","description":"Des","status":"ok","attributes":{},"tags":{"0":"Kamera"}},
            "5c10c9d99bfced350ccce87d": {"id":"5c10c9d99bfced350ccce87d","name":"Canon EOs 5D Mark3 (SLR) mit Objektiv EF 24-105","serial":"xxx","invnr":"40000 0291673","room":"H130","image":"/public/images/Canon_EOS5DMark3.png,\nCanon_EOS5DMark3_undTasche.png","description":"Des","status":"ok","attributes":{},"tags":{"0":"Kamera"}},
            "5c10c9d99bfced350ccce87e": {"id":"5c10c9d99bfced350ccce87e","name":"Enttec DMX USB Pro Interface","serial":"xxx","invnr":"40000 0291701","room":"L242","image":"/public/images/","description":"Des","status":"ok","attributes":{},"tags":{"0":"Sonstiges"}},
            "5c10c9d99bfced350ccce87f": {"id":"5c10c9d99bfced350ccce87f","name":"Enttec DMX USB Pro Interface","serial":"xxx","invnr":"40000 0291702","room":"L243","image":"/public/images/","description":"Des","status":"ok","attributes":{},"tags":{"0":"Sonstiges"}},
            "5c10c9d99bfced350ccce880": {"id":"5c10c9d99bfced350ccce880","name":"Enttec DMX USB Pro Interface","serial":"xxx","invnr":"40000 0291703","room":"L244","image":"/public/images/","description":"Des","status":"ok","attributes":{},"tags":{"0":"Sonstiges"}},
            "5c10c9d99bfced350ccce881": {"id":"5c10c9d99bfced350ccce881","name":"S Zoom H-6 Recoder","serial":"xxx","invnr":"40000 0291704","room":"L245","image":"/public/images/","description":"Des","status":"ok","attributes":{},"tags":{"0":"Sonstiges"}},
            "5c10c9d99bfced350ccce882": {"id":"5c10c9d99bfced350ccce882","name":"Edirol V4EX Video Mixer","serial":"xxx","invnr":"40000 1505561","room":"H924","image":"/public/images/","description":"Des","status":"ok","attributes":{},"tags":{"0":"Sonstiges"}},
            "5c10c9d99bfced350ccce883": {"id":"5c10c9d99bfced350ccce883","name":"Canon EF 100/2,8 macro Objektiv","serial":"xxx","invnr":"312001244522","room":"H130","image":"/public/images/","description":"Des","status":"ok","attributes":{},"tags":{"0":"Kamera"}},
            "5c10c9d99bfced350ccce884": {"id":"5c10c9d99bfced350ccce884","name":"Canon EF 50/2,5 macro Objektiv","serial":"xxx","invnr":"312001244549","room":"H130","image":"/public/images/Canon_EF-CompactMicroObjektiv_new.png","description":"Des","status":"ok","attributes":{},"tags":{"0":"Kamera"}},
            "5c10c9d99bfced350ccce885": {"id":"5c10c9d99bfced350ccce885","name":"Sony HDR-HC1 HDV Handycam","serial":"xxx","invnr":"312001242883","room":"H130","image":"/public/images/","description":"Des","status":"ok","attributes":{},"tags":{"0":"Kamera"}},
            "5c10c9d99bfced350ccce886": {"id":"5c10c9d99bfced350ccce886","name":"Manfrotto 501 Set-Stativ","serial":"xxx","invnr":"312001242884","room":"H130","image":"/public/images/Manfrotto_501.png","description":"Des","status":"ok","attributes":{},"tags":{"0":"Stativ"}},
            "5c10c9d99bfced350ccce887": {"id":"5c10c9d99bfced350ccce887","name":"Canon Speedlite 580 EX Blitzgeräte","serial":"xxx","invnr":"312001242911","room":"H130","image":"/public/images/","description":"Des","status":"ok","attributes":{},"tags":{"0":"Kamera"}},
            "5c10c9d99bfced350ccce888": {"id":"5c10c9d99bfced350ccce888","name":"Canon Speedlite 580 EX Blitzgeräte","serial":"xxx","invnr":"312001242912","room":"H130","image":"/public/images/","description":"Des","status":"ok","attributes":{},"tags":{"0":"Kamera"}}
        }
    }
})

async function x() {
    console.log("MODEL TEST: ", await model.get("devices[0..2]['id', 'name', 'image']"))
    console.log("MODEL TEST: ", await model.get("devicesById['5c10c9d99bfced350ccce888']['id', 'name', 'image']"))
}

x();