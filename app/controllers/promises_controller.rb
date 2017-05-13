class PromisesController < ApplicationController
  before_action :find_promise, only: [:edit, :update, :destroy]

  def index
    @promises = Promise.all
  end

  def new
    @promise = Promise.new
  end

  def create
    @promise = Promise.new(promise_params)
    if @promise.save
      redirect_to root_path
    else
      render 'new'
    end
  end

  def edit
  end

  def update
    if @promise.update(promise_params)
      redirect_to root_path
    else
      render 'edit'
    end
  end

  def destroy
    @promise.destroy
    redirect_to root_path
  end


  private

    def promise_params
      params.require(:promise).permit(:title)
    end

    def find_promise
      @promise = Promise.find(params[:id])
    end

end
