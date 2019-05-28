const net = require('net')
const fs = require('fs')

const routeSet = require('./routes')

/*
    pathname ===> /extend?a=b&c=d&e=f
    抽取
    {
        path: /extend,
        query: { a: 'b', c: 'd', e: 'f' }
    }
*/
const pathnameHandle = (path) => {
    if (path.indexOf('?') > -1) {
        const querys = path.split('?')[1];
        const args = querys.split('&')
        const q = {}
        for (let arg of args) {
            const [k, v] = arg.split('=')
            q[k] = v
        }
        return {
            path: path.split('?')[0],
            query: q
        }

    } else {
        return {
            path: path,
            query: {}
        }
    }
}

/*
    method ----> GET
    pathname ----> /extend?asd=asdasd
*/
const requestHandle = (r) => {
    const raw = r.split(' ')

    let request = {};
    request.method = raw[0]
    request.pathname = raw[1] // 分出path和query
    let { path, query } = pathnameHandle(request.pathname)
    request.path = path
    request.query = query
    request.body = r.split('\r\n\r\n')[1]
    console.log('request === > \n', request)
    return raw
}

const run = (host = '', port = 3000) => {
    const server = new net.Server()

    server.listen(port, host, () => {
        const address = server.address()
        console.log(`listening === > ${address.address}:${address.port}`)
    })

    server.on('connection', (s) => {
        s.on('data', (data) => {
            const r = data.toString('utf8')
            let req = requestHandle(r);

            const header = 'HTTP/1.1 200 OK\r\nContent-type:text/html\r\n'
            const body = '<meta charset="utf-8"><h1>没问题</h1>'
            const response = header + '\r\n' + body
            s.write(response)
            s.destroy()
        })
    })

    server.on('error', (err) => {
        console.log('server error === >', err)
    })

    server.on('close', () => {
        console.log('server closed')
    })
}


const __main = () => {
    run('127.0.0.1', 7000)
}

__main()