# require 'pry'

class GuestsController < ApplicationController

  def index
      @guest = Guest.all
  end

  def new
  end

  def create
      @guest = Guest.new
      @guest.first_name = params[:guest][:first_name]
      @guest.last_name =  params[:guest][:last_name]
      @guest.email = params[:guest][:email]
      @guest.phone = params[:guest][:phone]
      @guest.save
  #  binding.pry
      redirect_to '/guests/new'
  end

end
