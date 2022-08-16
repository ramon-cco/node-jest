import { makeMockResponse, MockResponse } from './../mocks/mockResponse';
import { Request } from 'express';
import { UserController } from './usersController';

describe('Users Controller', ()=> {
    const  userController= new UserController

    const mockRequest = {} as Request
    const mockResponse = makeMockResponse()
    it('Deve listar os usuários', ()=>{
        userController.listarUsuario(mockRequest ,mockResponse)
        expect(mockResponse.state.status).toBe(200)
        expect(mockResponse.state.json).toHaveLength(5)
    })
    it('Deve criar um novo usuário', () =>{
        mockRequest.body={
            name: 'novo usuário'
        }
        userController.criarUsuario(mockRequest,mockResponse)
        expect(mockResponse.state.status).toBe(201)
        expect(mockResponse.state.json).toMatchObject({'mensagem': `Usuário novo usuário criado`})
    })
    it('Não deve criar novo usuario com o nome em branco', () =>{
        mockRequest.body={
            name: ''
        }
        userController.criarUsuario(mockRequest,mockResponse)
        expect(mockResponse.state.status).toBe(403)
        expect(mockResponse.state.json).toMatchObject({'mensagem': `Não possivel criar um usuário sem nome`})
    })
})