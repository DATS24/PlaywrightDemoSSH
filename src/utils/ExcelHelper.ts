//import xlsx
import * as EXCEL from 'xlsx'
import fs from 'fs'

//define test data structure
interface TestRecord {
    Skill1 : string,
    Skill2 : string
}

//create method to read excel file
export function readExcelFile(filePath:string){

    //read the excel file as binary string
    const file = fs.readFileSync(filePath)
    //parse into workbook
    const workbook = EXCEL.read(file)

    //get first sheet
    const sheet = workbook.Sheets[workbook.SheetNames[0]]

    //convert sheet into json
    const rawData: any[] = EXCEL.utils.sheet_to_json(sheet, {header:1})

    //convert raw data into TestRecord
    const records : TestRecord[] = rawData.slice(1).map((column: any)=>({
        Skill1 : column[0],
        Skill2 : column[1]
    }))
    return records
}