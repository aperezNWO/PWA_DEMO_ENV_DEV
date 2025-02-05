import { CommonModule             } from '@angular/common';
import { Component, ViewChild     } from '@angular/core';
import { SquareComponent          } from "../square/square.component";
import { ListItem                 } from 'src/app/_models/algorithm.model';
import { ChatService              } from 'src/app/_services/chat/chat.service';
import { TicTacToeEngine          } from 'src/app/_engines/tictactoe-engine';
//
@Component({
    selector   : 'app-board-online',
    standalone : true,
    templateUrl: './board.component.html',
    styleUrls  : ['./board.component.css'],
    imports    : [CommonModule, SquareComponent]
})
export class BoardOnlineComponent {
  //--------------------------------------------------------------------
  // CHAT COMPONENT 
  //--------------------------------------------------------------------
  parentData: any[] = [];
  //--------------------------------------------------------------------
  // TIC TAC TOE COMPONENT 
  //--------------------------------------------------------------------
  protected tituloSource                   : string = '¿Quien Inicia?';
  protected __SourceList                   : any;
  @ViewChild('_SourceList')   _sourceList  : any;
  //
  protected IsNewGame                      : boolean = false;
  protected showBoard                      : boolean = false;
  //
  constructor(private chatService         : ChatService,
              public  ticTacToeEngine     : TicTacToeEngine)  
  {
      //
  }
  //
  ngOnInit() {
    //--------------------------------------------------------------------
    // CHAT COMPONENT 
    //--------------------------------------------------------------------
    this.chatService.getMessages().subscribe(messages => this.parentData = messages);
    this.chatService.onNewMessage.subscribe(message   => this.NotifyingMessage(message));
    //--------------------------------------------------------------------
    // TIC TAC TOE COMPONENT 
    //--------------------------------------------------------------------
    console.log("[TIC-TAC-TOE - INICIAR VALORES");
    //
    this.__SourceList = new Array();
    this.__SourceList.push(new ListItem(0, '(SELECCIONE OPCION..)'   , false));
    this.__SourceList.push(new ListItem(this.ticTacToeEngine.COMPUTER, '[INICIA MAQUINA]'     , true));
    this.__SourceList.push(new ListItem(this.ticTacToeEngine.HUMAN   , '[INICIA JUGADOR]'     , false));
    this.__SourceList.push(new ListItem(this.ticTacToeEngine.HUMAN   , '[JUGAR EN LINEA]'     , false));
    //
    this.ticTacToeEngine.initialise();
  }
  //
  ngAfterViewInit() {
    //--------------------------------------------------------------------
    // TIC TAC TOE COMPONENT 
    //--------------------------------------------------------------------
    this._sourceList.nativeElement.options.selectedIndex = 1;
  }
  //--------------------------------------------------------------------
  // CHAT COMPONENT 
  //--------------------------------------------------------------------
  //
  NotifyingMessage(message: string): void {
    console.log("Pushing data to client : " + message);
    //this.parentData.push(message);
    console.log("Message Array (client) : " + this.parentData);
  }
  //
  sendMessage(message: string) {
    console.log("sending message: ", message);
    this.chatService.sendMessage(message);
  }
  //--------------------------------------------------------------------
  // TIC TAC TOE COMPONENT 
  //--------------------------------------------------------------------
   //
   makeMove(n: number): void {
    //
    let message : string = `[TIC-TAC-TOE] - [Click on cel : {${n+1}}] `
    //
    console.log(message);
    //
    this.ticTacToeEngine.makeMove(n);
    //------------------------------------
    // CHAT
    //----------------------------------- 
    //
    this.chatService.sendMessage(message);
  }
  //
  newGame():void{
    //--------------------------------------------------------------------
    // TIC TAC TOE COMPONENT 
    //--------------------------------------------------------------------
    //
    console.log("[GAME - TIC-TAC-TOE] - [NEW GAME]")
    //
    this.ticTacToeEngine.initialise();
    //
    this.IsNewGame = true;
    //
    this.showBoard = false;

    //--------------------------------------------------------------------
    // CHAT COMPONENT 
    //--------------------------------------------------------------------
  }
  //
  startGame():void {
    //
    console.log("[GAME - TIC-TAC-TOE] - [START GAME]")
    //
    let selectedvalue: number = this._sourceList.nativeElement.options[this._sourceList.nativeElement.options.selectedIndex].value;
    //
    if (selectedvalue == this.ticTacToeEngine.COMPUTER ) {
        //
        this.ticTacToeEngine.makeComputerMove();
    }
    //
    this.IsNewGame = false;
    //
    this.showBoard = true;
  }
}
