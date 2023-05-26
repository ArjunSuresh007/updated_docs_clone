import {useState,useRef} from 'react'
import {IoDocumentTextSharp} from 'react-icons/io5'
import {AiOutlineStar,AiOutlineCloudDownload,AiOutlineFolderAdd,AiOutlinePlusCircle,AiOutlineMinusCircle} from 'react-icons/ai'
import {GrUndo,GrRedo,GrBold,GrItalic,GrUnderline,GrTextAlignCenter,GrTextAlignLeft,GrTextAlignRight} from 'react-icons/gr'
import {HiOutlineSave,HiOutlineLockClosed} from 'react-icons/hi'
import {MdOutlineMessage} from 'react-icons/md'
import {BsClockHistory} from 'react-icons/bs'
import {RxDividerVertical as RxDividerVertical} from 'react-icons/rx'
import {SiGooglemeet} from 'react-icons/si'
import {BiImageAdd,BiLeftIndent,BiRightIndent} from 'react-icons/bi'
import {saveAs} from 'file-saver'
import './Css_files/header.css'

export default function Headers(){
    let undoRef = useRef(new Set([]))
    let inputRef = useRef('')
    let count = 0
    let Size = 5
    let editor;

    Set.prototype.getByIndex = function(index) {return [...this][index]} 

    setTimeout(
        ()=>{
            editor = document.getElementsByClassName('main-editor')[0]
             editor.addEventListener('keyup', (event)=>{
                undoRef.current.add(editor.value)
            })
        }
    ,1000)

    function downloadHandler(){
        var content = editor.value;
        let a = prompt('can we download it ?');
        if(a.trim().toLowerCase() === 'yes'){
            var blob = new Blob([content], {type: "text/plain;charset=utf-8"});
            saveAs(blob, `${inputRef.current === '' ? 'untitled Document': inputRef.current}.txt`);
        }else{
            alert('not downloaded')
        }
    }

    function inputHandler(param){
        inputRef.current = param.target.value
    }

    function undoHandler(){
        if (undoRef.current.size > 1 && (undoRef.current.getByIndex(undoRef.current.size - (2+count)))){
            editor.value = undoRef.current.getByIndex(undoRef.current.size - (2+count))
            count += 1
        }else{
            console.log(null)
        }
    }
    function redoHandler(){
        if (undoRef.current.size > 1 && (undoRef.current.getByIndex(undoRef.current.size - (2+count)) != undefined) ){
            editor.value = undoRef.current.getByIndex(undoRef.current.size - (2+count))
            count -= 1
        }else{
            console.log(null)
        }
    }

    function alignHandler(param){
        editor.style.textAlign = param
    }

    function textHandler(param){
        switch(param){
            case 'bolder':
            editor.style.fontWeight = param
            break
            case 'italic':
            editor.style.textStyle = param
            break
            case 'underline':
            editor.style.textDecoration = param
            break
            case 'normal':
            editor.style.fontWeight = 'normal'
            editor.style.textDecoration = 'none'
            editor.style.textStyle = 'none'
            break
            default:
            break
        }
    }

    function fontHandler(param,e){
        Size += param
        console.log(Size)
        switch(Size){
            case 1:
                editor.style.fontSize = 'xx-small'
                break        
            case 2:
                editor.style.fontSize = 'x-small'
                break
            case 3:
                editor.style.fontSize = 'smaller'
                break
            case 4:
                editor.style.fontSize = 'small'
                break
            case 5:
                editor.style.fontSize = 'medium'
                break
            case 6:
                editor.style.fontSize = 'large'
                break
            case 7:
                editor.style.fontSize = 'larger'
                break
            case 8:
                editor.style.fontSize = 'x-large'
                break
            case 9:
                editor.style.fontSize = 'xx-large'
                break
            default:
                Size = 9
                break
        }
        console.log(editor.style.fontSize)
    }

    return(
        <div className='total-header'>
        <div className='options-toolbar'>
            <div className='logo-icon'>
        <IoDocumentTextSharp  color='rgb(66,133,244)' size='3rem'/>
            </div>
            <div className='options-data'>
                <div className='title-bar'>
                    <div className='title-bar-item-1'>
                    <input className='title-input' onChange={e=>inputHandler(e)} placeholder='Untitled Document' type='text' />
                    <div className='mini-icons-bar'>
                        <AiOutlineStar className='mini-icons-bar-item'/>
                        <AiOutlineCloudDownload className='mini-icons-bar-item'/>
                        <AiOutlineFolderAdd className='mini-icons-bar-item'/>
                    </div>
                    </div>
                    <div className='title-bar-item-2'>
                        <div className='title-bar-item2-mc1'>
                        <button className='title-bar-item2-ch'>
                        <BsClockHistory size='1.5em'/>
                        </button>
                        <button className='title-bar-item2-ch'>
                        <MdOutlineMessage size='1.5em'/>
                        </button>
                        <button className='title-bar-item2-ch'>
                        <SiGooglemeet size='1.5em'/>
                        </button>
                        </div>
                        <div className='title-bar-item2-mc2'>
                            <button className='title-bar-item2-share' name='share-icon'>
                                    <HiOutlineLockClosed size='1.5em'/>
                            </button>
                        </div>
                    </div>
                </div>
                <div className='title-bar-options'>
                    <button className='item-option-btn'  type='button' >File</button>
                    <button className='item-option-btn' type='button' >Edit</button>
                    <button className='item-option-btn' type='button' >View</button>
                    <button className='item-option-btn' type='button' >Insert</button>
                    <button className='item-option-btn' type='button' >Format</button>
                    <button className='item-option-btn' type='button' >Tools</button>
                    <button className='item-option-btn' type='button' >Extentions</button>
                    <button className='item-option-btn' type='button' >Help</button>
                    <button className='item-option-btn' type='button' >Accessibility</button>
                </div>
            </div>
        </div>
        <div className='icons-toolbar'>
            <div className='icon-btn-list' >
                    <button className='item-option-btn' type='button' onClick={()=>undoHandler()}>
                        <GrUndo  size='1.25em' />
                    </button>
                    <button className='item-option-btn' type='button' onClick={()=>redoHandler()} >
                        <GrRedo  size='1.25em'/>
                    </button>
                    <button className='item-option-btn' type='button'  onClick={()=>downloadHandler()} >
                        <HiOutlineSave size='1.25em'/>
                    </button>
                    <RxDividerVertical className='divider' size='1.5em' />
                    <button className='item-option-btn' type='button' onClick={()=>textHandler('bolder')} onDoubleClick={()=>textHandler('normal')}>
                        <GrBold size='1.25em'/>
                    </button>
                    <button className='item-option-btn' type='button' onClick={()=>textHandler('italic')} onDoubleClick={()=>textHandler('normal')}> 
                        <GrItalic size='1.25em'/>
                    </button>
                    <button className='item-option-btn' type='button' onClick={()=>textHandler('underline')} onDoubleClick={()=>textHandler('normal')}>
                        <GrUnderline size='1.25em'/>
                    </button>
                    <RxDividerVertical className='divider' size='1.5em'/>
                    <button className='item-option-btn' type='button' onClick={()=>fontHandler(1)}>
                        <AiOutlinePlusCircle size='1.25em'/>
                    </button>
                    <button className='item-option-btn' type='button' onClick={()=>fontHandler(-1)}>
                        <AiOutlineMinusCircle size='1.25em'/>
                    </button>
                    <RxDividerVertical className='divider' size='1.5em'/>
                    <button className='item-option-btn' type='button' onClick={(e)=>alignHandler('left')}>
                        <GrTextAlignLeft size='1.25em'/>
                    </button>
                    <button className='item-option-btn' type='button' onClick={(e)=>alignHandler('center')}>
                        <GrTextAlignCenter size='1.25em'/>
                    </button>
                    <button className='item-option-btn' type='button' onClick={(e)=>alignHandler('right')}>
                        <GrTextAlignRight size='1.25em'/>
                    </button>
                    <RxDividerVertical className='divider' size='1.5em'/>
                    <button className='item-option-btn' type='button' >
                        <BiImageAdd size='1.25em'/>
                    </button>
                    <button className='item-option-btn' type='button' >
                        <BiLeftIndent size='1.25em'/>
                    </button>
                    <button className='item-option-btn' type='button' >
                        <BiRightIndent size='1.25em'/>
                    </button>
                    </div>
        </div>
        </div>
    )
}