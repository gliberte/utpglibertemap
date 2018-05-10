import mongoose from 'mongoose'
import User from '../modelos/users'
import passport from 'passport'


export const getUserByEmailAndPassword = (email,passwrod)=>{

}

export const registerUser =  (userData,password)=>{
    return new Promise((resolve,reject)=>{
        User.register(userData,password,(err,user)=>{
            if(err){
                reject(err)
            }
            resolve(user)
        })
    })
}
export const login =  ({email,password,req})=>{
    return new Promise((resolve,reject)=>{
        passport.authenticate('local',(err,user,info)=>{
            if(err){
                reject('Usuario no autorizado')
            }
            if(!user) reject('Crendenciales inválidas')
            req.login(user,(err)=>{
                if(err) return reject(err)
                resolve(user)
            })
        })({body:{email,password}})
    })
    
}
export const logout = ({req})=>{
    return new Promise((resolve,reject)=>{
        const {user}=req
        req.logout()
        resolve(user)
    })
}

export const getUsers = ()=>{
    return User.find()
}