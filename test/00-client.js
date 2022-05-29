import chai from "chai"
import { expect } from "chai"
import { assert } from "chai"
import ClientService from "../src/modules/client/client-service.js"
import ClientRepository from '../src/modules/client/client-repository.js'


chai.should()

const email = Math.random().toString(36).substring(2, 15) + '@' + 'hotmail.com'
const clientRepository = new ClientRepository()
const clientService = new ClientService(clientRepository)
describe('Client', function () {
    let CreateClient
    describe('#Create', function () {
        it('Should create the client', async function () {
            const client = {
                name: 'Cliente Teste',
                email: email,
                password: '123456',
                phone: '123456789',
            }

            CreateClient = await clientService.create(client)
            CreateClient.should.be.a('object')
            CreateClient.should.have.property('email')
            CreateClient.should.have.property('name')
            CreateClient.should.have.property('password')
            CreateClient.should.have.property('id')
        })

        it('Should return: email already exists', async function () {
            const client = {
                name: 'Cliente Teste',
                email: email,
                password: '123456',
                phone: '123456789',
            }
            try {
                CreateClient = await clientService.create(client)
            } catch (err) {
                err.should.be.an.instanceOf(Error)
                err.message.should.be.equal('Email already exists')
            }
        })

    })
    describe('#Get', function () {
        it('Should get client by id', async function () {
            const id = CreateClient.id
            const client = await clientService.get(id)
            client.should.be.a('object')
            client.should.have.property('email')
            client.should.have.property('name')
            client.should.have.property('password')
            client.should.have.property('id')
        })


        it('Should get client by email', async function () {
            const email = CreateClient.email
            const client = await clientService.get(email)
            client.should.be.a('object')
            client.should.have.property('email')
            client.should.have.property('name')
            client.should.have.property('password')
            client.should.have.property('id')
        })
    })

    describe('#Update', function () {
        it('Should update client', async function () {
            const client = {
                email: '5252202@teste.com',
            }

            const updateClient = await clientService.update(CreateClient.id, client)
            updateClient.should.be.a('object')

        })

        it('Should return: email already exists', async function () {
            const client = {
                name: 'Cliente Teste',
                email: '5252202@teste.com',
                password: '123456',
                phone: '123456789',
            }
            try {
                const updateClient = await clientService.update(CreateClient.id, client)
            } catch (err) {
                err.should.be.an.instanceOf(Error)
                err.message.should.be.equal('Email already exists')
            }
        })
    })

    describe('#Delete', function () {

        it('Should delete client', async function () {
            const updateClient = await clientService.delete(CreateClient.id)
            updateClient.should.be.a('object')
        })
    })
})