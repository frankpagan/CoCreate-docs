module.exports = {
    config: {
        apiKey: "c2b08663-06e3-440c-ef6f-13978b42883a",
        securityKey: "f26baf68-e3a9-45fc-effe-502e47116265",
        organization_Id: "5de0387b12e200ea63204d6c",
        host: "server.cocreate.app:8088"
    },
 
    sources: [
        {
            path: "./test_files/test.html",
            collection: "static_html",
            document_id: "5f08bf3da588c11bf8ead4b3",
            key: "html",
            data:{
                description:"test descrition"
            }
        },
    ],
   
    crud: [
        {
            collection: "test",
            document_id: "6010e012f80ce138be7eed01",
            data:{
                domains: ["cocreate.app"],
                route: "/docs/boilerplate",
            }
        }
    ],
    
    extract: {
        directory: "./test_files/",
        extensions: [
            "js",
            "css",
            "html"
        ],
        ignores: [
            "node_modules",
            "vendor",
            "bower_components",
            "archive"
        ],
    }
}