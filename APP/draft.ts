

import {
    App, Perfil, Postagem, PostagemAvancada, RedeSocial, RepositorioDePerfis, RepositorioDePostagens
} from "../cls/cls"

import {lucas, gabriel, antonio} from "../tests/perfis"


const profiles: Perfil[] = []
let posts: Postagem[] = [
    new Postagem(0, 'Qual Seria o dia ?', 25, 29, "2021-08-01", lucas),
    new PostagemAvancada(1, "Brazil Number 1", 30, 25, "2022-02-10", gabriel,  [ '#:p', '#Trait_Vibes', '#Live-loveLaugh' ], 20),
    new Postagem(2, "Louvado seja deus", 32, 99, "2023-05-05", antonio),
    new Postagem(3, "Olá, como estão ?", 30, 40, "2023/07/07", lucas),
    new PostagemAvancada(4, "Eu retirei meus pontos", 10, 30, "2020/09/11", gabriel,  [ '#alivio', '#Felencia' ], 0)
]
const repProfiles: RepositorioDePerfis = new RepositorioDePerfis(profiles)
const repPosts: RepositorioDePostagens = new RepositorioDePostagens(posts)
const socialMedia: RedeSocial = new RedeSocial(repProfiles, repPosts)
const app: App = new App(socialMedia, true)

