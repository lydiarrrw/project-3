import dotenv from 'dotenv'

dotenv.config()

const environment = process.env.NODE_ENV || 'development'

export const dbURI = environment === 'production'

  ? process.env.MONGODB_URI

  : `mongodb://localhost/stepladderdb-${environment}`

export const port = process.env.PORT || 8000

export const secret = process.env.SECRET || 'ediu534534fghhjbfusdnfu ruhfjrguhu4635634rag hrgaiuhr gvnhukjdhb56245dfasidfhaskjdf hfuiahf'

