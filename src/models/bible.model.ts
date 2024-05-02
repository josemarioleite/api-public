export interface Book {
  author: string
  chapters: number | Array<number>
  group: string
  name: string
  testament: string
  abbrev: {
    pt: string
    en: string
  }
}

export interface Chapter {
  total: number
  verses: Array<Verse>
}

export interface Version {
  name: string
  abbrev: string
}

export enum VersionEnum {
  'acf' = 'Almeida Corrigida Fiel',
  'apee' = `La Bible de l'Épée`,
  'bbe' = 'Bible in Basic English',
  'kjv' = 'Versão King James',
  'nvi' = 'Nova Versão Internacional',
  'ra' = 'Almeida Revista e Atualizada',
  'rvr' = 'Reina-Valera Revisada'
}

interface Verse {
  number: number
  text: string
}