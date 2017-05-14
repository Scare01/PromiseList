class PromisesController < ApplicationController
  before_action :find_promise, only: [:edit, :update, :destroy]

  def index
    if user_signed_in?
      @promises = Promise.where(:user_id => current_user.id)
    end
  end

  def new
    @promise = current_user.promises.build
  end

  def create
    @promise = current_user.promises.build(promise_params)
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
