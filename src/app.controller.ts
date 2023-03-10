import { Controller, Delete, Get, Post, Put} from "@nestjs/common";
import { Body, Param } from "@nestjs/common/decorators";
import { ticketDTO } from "./DTO/ticket.dto";
import { TicketService } from "./ticket.service";


@Controller("ticket")
export class TicketController{

    constructor(private ticketService : TicketService){}

    //add ticket
    @Post("/add")
    addTicket(@Body() newTicket:ticketDTO){
        return this.ticketService.addTicket(newTicket);
    }


    //delete ticket
    @Delete("/delete/:id")
    deleteTicketById(@Param("id") id:number){
        return this.ticketService.deleteTicketById(id);
    }


    //update ticket
    @Put("/update")
    updateTicket() : string{
        return this.ticketService.updateTicket();
    }
    
    
    //find all ticket
    @Get("/findAll")
    findAllTickets(){
        return this.ticketService.findTicket();
    }

    // @Get(':id')
    // findTicketById(@Param() params){
    //     return this.ticketService.findTicketById(params.id);
    // }
}

